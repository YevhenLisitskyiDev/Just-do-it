import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import useQuestions from "@/api/questions/useQueestions"; // Please replace with your actual import

export default function QuestionsAutocomplete() {
  const { data: questions, isLoading } = useQuestions();

  return (
    <Autocomplete
      id="questions-autocomplete"
      options={questions || []}
      getOptionLabel={(option) => `${option.title} | ${option.question}`}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a question"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}
