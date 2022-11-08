import { Header } from "../../../components/Header";
import { useUserContext } from "../../../contexts/UserContext";
import { StyledAdminCard, StyledDashboard } from "./style";
import userImg from "../../../assets/photo.png";
import { StyledImageProfile } from "../../../components/ImageProfile/style";
import { useQuestionContext } from "../../../contexts/QuestionContext";
import { InputSearch } from "../../../components/InputSearch";
import { useEffect, useState } from "react";
import { iQuestion } from "../../../contexts/UserContext/types";
import { QuestionCard } from "../../../components/QuestionCard";
import { StyledList } from "../../AnsweredQuestions/style";

export const DashboardAdm = () => {
  const { user } = useUserContext();
  const { allQuestions, searchedQuestion } = useQuestionContext();
  const [teste, setTeste] = useState([] as iQuestion[]);

  useEffect(() => {
    const testee = allQuestions.filter((element) =>
      element.tech.toLowerCase().includes(searchedQuestion.toLowerCase().trim())
    );
    setTeste(testee);
  }, [searchedQuestion]);

  return (
    <StyledDashboard>
      <Header></Header>
      <div className="backgroundDash">
        <div className="containerDash">
          <StyledAdminCard>
            <StyledImageProfile>
              <img src={user.user.image ? user.user.image : userImg} alt="" />
              <button>Editar imagem</button>
            </StyledImageProfile>
            <div className="userContent">
              <h1>{user.user.name}</h1>
              <p>Desenvolvedor</p>
              <p>
                Status: <span>Online</span>
              </p>
            </div>
          </StyledAdminCard>
          {user.user.bio && (
            <div className="userBio">
              <p>{user.user.bio}</p>
            </div>
          )}
          <div className="search">
            <h3 className="questionAreaTitle">Perguntas</h3>
            <div className="searchArea">
              <InputSearch></InputSearch>
            </div>
          </div>
          <ul className="questionArea">
            {teste.length
              ? teste.map((element) => {
                  return (
                    <StyledList key={element.id}>
                    <QuestionCard
                      title={element.title}
                      tech={element.tech}
                      description={element.description}
                      username={element.user.name}
                      image={element.user.image}
                      date={new Date().toISOString()}
                    ></QuestionCard>
                    </StyledList>
                  );
                })
              : allQuestions.map((element) => {
                  return (
                    <StyledList key={element.id}>
                    <QuestionCard
                      title={element.title}
                      tech={element.tech}
                      description={element.description}
                      username={element.user.name}
                      image={element.user.image}
                      date={new Date().toISOString()}
                    ></QuestionCard>
                    </StyledList>
                  );
                })}
          </ul>
        </div>
      </div>
    </StyledDashboard>
  );
};
