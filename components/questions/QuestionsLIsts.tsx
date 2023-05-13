import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useQuestions from "@/api/questions/useQuestions"; // Please replace with your actual import
import { Question } from "types";

export default function QuestionsList() {
  const { data: questions } = useQuestions();

  // Function to handle click on the add icon
  const handleAddClick = (question: Question) => {
    // Invoke your action here
    console.log(`Add question: ${question.title}`);
  };

  return (
    <List>
      {questions?.map((question) => (
        <ListItem
          key={question.id}
          button
          onClick={() => handleAddClick(question)}
        >
          <ListItemText primary={`${question.title} | ${question.question}`} />
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
