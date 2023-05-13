export type Question = {
  id: string;
  title: string;
  question: string;
};

export type Answer = {
  id: string;
  created_at: Date;
  question_id: Question["id"];
  did_you_do_it: boolean;
  comment: string;
};
