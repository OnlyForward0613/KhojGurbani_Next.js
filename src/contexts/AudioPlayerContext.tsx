"use client";

import React, { createContext, useState } from "react";

interface AudioDataProps {
    audioId: number;
    audioTitle: string;
    audioUrl: string;
    isPlaying: boolean;
    playAudio: (url: string, title: string, id: string) => void;
    pauseAudio: () => void;
}

interface AudioPlayerContextProps {
    audioId: string;
    audioTitle: string;
    audioUrl: string;
    isPlaying: boolean;
    playAudio: (url: string, title: string, id: string) => void;
    pauseAudio: () => void;
}

const useAudioState = (initialData: AudioDataProps) => useState<AudioDataProps>(initialData);

export const AudioPlayerContext = createContext<ReturnType<typeof useAudioState> | null>(null);

export const useAudioPlayer = () => {
    const audioData = React.useContext(AudioPlayerContext);
    if (!audioData) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return audioData;
};

const AudioPlayerProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [audioId, setAudioId] = useState<string>('');
    const [audioTitle, setAudioTitle] = useState<string>('');
    const [audioUrl, setAudioUrl] = useState<string>('');
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const playAudio = (url: string, title: string, id: string) => {
        setAudioId(id);
        setAudioTitle(title);
        setAudioUrl(url);
        setIsPlaying(true);
    };

    const pauseAudio = () => {
        setIsPlaying(false);
    };

    const [audioDataProps, setAudioDataProps] = useAudioState({ audioId: 0, audioTitle: "", audioUrl: "", isPlaying: false, playAudio, pauseAudio });

    return (
        <AudioPlayerContext.Provider value={[audioDataProps, setAudioDataProps]}>
            {children}
        </AudioPlayerContext.Provider>
    );
};

export default AudioPlayerProvider;