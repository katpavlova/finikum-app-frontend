import React, { createContext, useState, useContext, ReactNode, FunctionComponent } from 'react';

interface LessonProviderProps {
  children: ReactNode;
}

interface LessonContextType {
  lessonTitle: string;
  setLesson: (title: string) => void;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const LessonProvider: FunctionComponent<LessonProviderProps> = ({ children }) => {
	const [lessonTitle, setLessonTitle] = useState<string>("");

	const setLesson = (title: string) => {
		setLessonTitle(title);
	};

	const value = { lessonTitle, setLesson };

	return (
		<LessonContext.Provider value={value}>
			{children}
		</LessonContext.Provider>
	);
};

export const useLesson = (): LessonContextType => {
	const context = useContext(LessonContext);
	if (context === undefined) {
		throw new Error('useLesson must be used within a LessonProvider');
	}
	return context;
};