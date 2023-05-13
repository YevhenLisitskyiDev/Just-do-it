import { useQuery } from "react-query";
import { supabase } from "supabase";

export type Question = {
  id: string;
  title: string;
  question: string;
};

const getQuestions = async (): Promise<Question[]> => {
  const { data: Questions, error } = await supabase
    .from("Questions")
    .select("*");

  if (error) throw error;

  return Questions;
};

const useQuestions = () => {
  return useQuery<Question[], Error>("questions", getQuestions);
};

export default useQuestions;
