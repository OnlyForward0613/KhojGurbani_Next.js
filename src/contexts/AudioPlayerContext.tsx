"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface AudioPlayerContextProps {
    audioId: string;
    audioTitle: string;
    audioUrl: string;
    isPlaying: boolean;
    playAudio: (url: string, title: string, id: string, audioDuration: number) => void;
    pauseAudio: () => void;
    audioDuration: number;
}

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined);

interface AudioPlayerProviderProps {
    children: ReactNode;
}

export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({ children }) => {
    const [audioId, setAudioId] = useState<string>('');
    const [audioTitle, setAudioTitle] = useState<string>('');
    const [audioUrl, setAudioUrl] = useState<string>('');
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioDuration, setAudioDuration] = useState<number>(0);

    const playAudio = (url: string, title: string, id: string, audioDuration: number) => {
        setAudioId(id);
        setAudioTitle(title);
        setAudioUrl(url);
        setIsPlaying(true);
        setAudioDuration(audioDuration);
    };

    const pauseAudio = () => {
        setIsPlaying(false);
    };

    return (
        <AudioPlayerContext.Provider value={{ audioId, audioTitle, audioUrl, isPlaying, playAudio, pauseAudio, audioDuration }}>
            {children}
        </AudioPlayerContext.Provider>
    );
};

export const useAudioPlayer = (): AudioPlayerContextProps => {
    const context = useContext(AudioPlayerContext);
    if (!context) {
        throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
    }
    return context;
};
