import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iQuestion, iUser } from "../UserContext/types";
import {
  iDataQuestion,
  iQuestionContextProps,
  iQuestionProvider,
} from "./types";

const QuestionContext = createContext<iQuestionProvider>(
  {} as iQuestionProvider
);

export const QuestionProvider = ({ children }: iQuestionContextProps) => {
  const [isModCreateQuestOpen, setIsModCreateQuestOpen] = useState(false);
  const [isModEditQuestOpen, setIsModEditQuestOpen] = useState(false);
  const [isModCreateRespOpen, setIsModCreateRespOpen] = useState(false);
  const [isModEditRespOpen, setIsModEditRespOpen] = useState(false);
  const [isModDeleteQuestOpen, setIsModDeleteQuestOpen] = useState(false);
  const [isModDeleteUser, setIsModDeleteUser] = useState(false);
  const [isModEditProfile, setIsModEditProfile] = useState(false);

  const getToken = localStorage.getItem("@Token-ProSupport");
  const [allQuestions, setAllQuestions] = useState([] as iQuestion[]);
  const [searchedQuestion, setSearchedQuestion] = useState("");
  const [answeredQuestion, setAnsweredQuention] = useState([] as iQuestion[]);

  useEffect(() => {
    async function getAllQuestions() {
      //Loading(true)
      try {
        api.defaults.headers.common.authorization = `Bearer ${getToken}`;
        const response = await api.get<iQuestion[]>(
          "/questions?_embed=responses&_limit=10&_sort=id&_order=desc&_expand=user"
        );
        setAllQuestions(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        //Loading(false)
      }
    }
    getAllQuestions();
  }, [getToken]);

  async function answerQuestion(body: iQuestion) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.post<iQuestion[]>("/responses", body);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function editAnswer(body: iQuestion, id: iUser) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.patch<iQuestion[]>(`/responses/${id}`, body);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function deleteAnswer(id: iUser) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.delete(`/responses/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function createQuestion(data: iDataQuestion) {
    let id = localStorage.getItem("@userID-ProSupport");
    const body = { ...data, userId: id };
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      await api.post<iDataQuestion>("/questions", body);
      toast.success("Pergunta enviada com sucesso.");
      setIsModCreateQuestOpen(false);
    } catch (error) {
      toast.error("Erro ao enviar pergunta.");
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function editQuestion(body: iQuestion, id: iUser) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.patch<iQuestion[]>(`/questions/${id}`, body);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  async function deleteQuestion(id: iUser) {
    //Loading(true)
    try {
      api.defaults.headers.common.authorization = `Bearer ${getToken}`;
      const response = await api.delete<iQuestion[]>(`/questions/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      //Loading(false)
    }
  }

  return (
    <QuestionContext.Provider
      value={{
        allQuestions,
        searchedQuestion,
        answeredQuestion,
        setAnsweredQuention,
        setSearchedQuestion,
        isModCreateQuestOpen,
        setIsModCreateQuestOpen,
        isModEditQuestOpen,
        setIsModEditQuestOpen,
        isModCreateRespOpen,
        setIsModCreateRespOpen,
        isModEditRespOpen,
        setIsModEditRespOpen,
        isModDeleteQuestOpen,
        setIsModDeleteQuestOpen,
        isModDeleteUser,
        setIsModDeleteUser,
        isModEditProfile,
        setIsModEditProfile,
        createQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
