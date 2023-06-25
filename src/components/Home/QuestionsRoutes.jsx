import React from "react";
import TopicList from "../../common/topicList/topicList";

const QUESTIONS_ROUTES = [
  {
    heading: '',
    pathname: '/questions',
    children: [
  {
    title: "Array",
    id: "array",
  },
  {
    title: "String",
    id: "string"
  },
  {
    title: "Object",
    id: "object"
  },
  {
    title: "Number",
    id: "number"
  },
  {
    title: "Regex",
    id: "regex"
  },
  {
    title: "Conversion",
    id: "conversion"
  },
  {
    title: "Javascript",
    id: "javascript"
  },
  {
    title: "Object",
    id: "object"
  }]}
];

const QuestionsRoutes = () => (
  <TopicList list={QUESTIONS_ROUTES} />
);

export default QuestionsRoutes;
