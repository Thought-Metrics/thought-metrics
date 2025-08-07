import { ArrowRed } from '@/assets';
import { cn } from '@/core/utils/cn';
import React, { useState } from 'react';

const QuestionaryCardValue: React.FC<any> = ({
  questionary,
  className = '',
}) => {
  if (questionary.list) {
    return (
      <ul className={cn('mt-4 text-base md:text-xl', className)}>
        {questionary.list.map((question: string, index: number) => {
          return (
            <li key={index + question} className="flex items-start">
              <span className="mr-3">•</span>
              <span>{question}</span>
            </li>
          );
        })}
      </ul>
    );
  }
  if (questionary.description) {
    return (
      <p
        className="mt-4 md:text-xl"
        dangerouslySetInnerHTML={{
          __html: questionary.description,
        }}
      />
    );
  }
};

const QuestionaryCard: React.FC<any> = ({ questionnaires, className = '' }) => {
  const [activeQuestionary, setActiveQuestionary] = useState<string | null>(
    questionnaires[0].title
  );

  const toggleSection = (section: string) => {
    if (section === activeQuestionary) {
      setActiveQuestionary(null);
    } else {
      setActiveQuestionary(section);
    }
  };

  return (
    <div className={cn('w-full p-6 flex flex-col gap-3', className)}>
      {/* Who to target Section */}
      {questionnaires.map((questionary: any, index: number) => {
        return (
          <div key={index + questionary.title} className="">
            <button
              onClick={() => toggleSection(questionary.title)}
              className="flex items-center gap-3 w-full text-left hover:opacity-80 transition-opacity"
            >
              <h2 className="text-base md:text-xl font-semibold">
                {questionary.title}
              </h2>
              <ArrowRed
                className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ease-in-out ${questionary.title === activeQuestionary ? '-rotate-90' : 'rotate-90'}`}
              />
            </button>

            {questionary.title === activeQuestionary && (
              <QuestionaryCardValue questionary={questionary} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionaryCard;
