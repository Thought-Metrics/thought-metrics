import { ArrowRed } from '@/assets';
import React, { useState } from 'react';

const QuestionaryCard: React.FC<any> = ({ questionaries }) => {
  const [activeQuestionary, setActiveQuestionary] = useState<string | null>(
    questionaries[0].title
  );

  const toggleSection = (section: string) => {
    if (section === activeQuestionary) {
      setActiveQuestionary(null);
    } else {
      setActiveQuestionary(section);
    }
  };

  return (
    <div className="w-full p-6 flex flex-col gap-3">
      {/* Who to target Section */}
      {questionaries.map((questionary: any, index: number) => {
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
              <ul className="mt-4 text-base md:text-xl">
                {questionary.list.map((question: string, index: number) => {
                  return (
                    <li key={index + question} className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>{question}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionaryCard;
