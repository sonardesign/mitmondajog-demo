import React from 'react'
import AnswerItem, { AnswerItemProps } from "./AnswerItem.tsx";

interface AnswersProps {
  items: AnswerItemProps[];
}

const Answers: React.FC<AnswersProps> = ({
  items
}) => {
  return (
    <section className="srl-answers">
      <div className="srl-answers-list">
        {items.map((item, index) => (
          <AnswerItem title={item.title} shortDescription={item.shortDescription}
                      description={item.description} meta={item.meta} key={index}></AnswerItem>
        ))}
      </div>
    </section>
  )
}

export default Answers
