import QuestionsAutocomplete from "@/components/questions/QuestionsAutocomplete";
const Thing: React.FC<{ msg: string }> = (props) => {
  return <div>{props.msg}</div>;
};

export default () => {
  return (
    <div>
      <QuestionsAutocomplete />
      Hello World. <Thing msg="hello" />
    </div>
  );
};
