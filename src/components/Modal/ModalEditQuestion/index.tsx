import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { iDataQuestion } from "../../../contexts/QuestionContext/types";
import { QuestionSchema } from "../../../schemas/questionSchema";
import { StyledButton } from "../../../style/button/style";
import { StyledModalQuestion } from "../../../style/modalQuestion/style";
import { StyledInput } from "../../Input/style";
import { StyledSelectTechs } from "../../SelectTechs/style";
import { StyledTextArea } from "../../TextArea/style";
import { ModalContainer } from "../ModalContainer";

export const ModalEditQuestion = () => {
  const { setIsModEditQuestOpen } = useQuestionContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataQuestion>({ resolver: yupResolver(QuestionSchema) });

  //mover essa função para o contexto quando houver a lógica de pegar o id do usuário ao abrir modal
  function editQuestion(data: iDataQuestion) {
    console.log(data);
    //receber o id da pergunta
    //realizar requisição da pergunta com o data como body
    //PATCH/questions/id
    //Toast correpondentes no try/catch
    //setIsModEditQuestOpen(false) em caso de sucesso
  }

  //pensar em uma lógica para adicionar aos campos correspondentes(inputs e textarea) os valores já existentes para facilitar edição

  return (
    <ModalContainer setIsModOpen={setIsModEditQuestOpen}>
      <StyledModalQuestion>
        <p>Edite sua questão</p>
        <form onSubmit={handleSubmit(editQuestion)}>
          <StyledInput
            errors={errors.title}
            register={register("title")}
            label="Título"
            name="title"
            type="text"
            className="isModal"
            modalPlaceholder="Edite o título"
          />
          <label htmlFor="select" className="text one">
            Tecnologias
          </label>
          <StyledSelectTechs register={register("tech")} id="select" />
          <StyledTextArea
            register={register("description")}
            label="Descrição"
            placeholder="Edite sua Descrição"
          />
          <StyledButton variant="default">Responder</StyledButton>
        </form>
      </StyledModalQuestion>
    </ModalContainer>
  );
};
