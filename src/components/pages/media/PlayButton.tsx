export default function ButtonPlay(props: { isPlaying: boolean, type: boolean, width: number, height: number }) {
    const { isPlaying, type, width, height } = props;
    return (
        <div className={(type ? `bg-blue-primary ` : `bg-[#E0E1E2] hover:bg-[#CACBCD] `) + `relative rounded-full flex justify-center items-center transition-all`}
            style={{ width: `${width}px`, height: `${height}px` }}>
            {type ?
                isPlaying ?
                    <svg viewBox="0 0 24 24" width={width / 2} height={height / 2} xmlns="http://www.w3.org/2000/svg"
                        className="transition-all fill-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <path 
                            d="M10 5C10 3.34315 8.65686 2 7 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H7C8.65686 22 10 20.6569 10 19V5ZM8 5C8 4.44772 7.55229 4 7 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H7C7.55229 20 8 19.5523 8 19V5Z"
                        />
                        <path 
                            d="M22 5C22 3.34315 20.6569 2 19 2H17C15.3431 2 14 3.34315 14 5V19C14 20.6569 15.3431 22 17 22H19C20.6569 22 22 20.6569 22 19V5ZM20 5C20 4.44772 19.5523 4 19 4H17C16.4477 4 16 4.44772 16 5V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V5Z"
                        />
                    </svg> :
                    <svg viewBox="-0.5 0 7 7" width={width / 2} height={height / 2} version="1.1" xmlns="http://www.w3.org/2000/svg"
                        className={(type ? "fill-white " : "fill-blue-primary ") + "transition-all absolute top-1/2 left-1/2 translate-x-[-45%] translate-y-[-50%]"}>
                        <g id="Page-1">
                            <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path
                                        d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                                        id="play-[#1003]">

                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                :
                <svg viewBox="-0.5 0 7 7" width={width / 2} height={height / 2} version="1.1" xmlns="http://www.w3.org/2000/svg"
                    className="fill-blue-primary transition-all absolute top-1/2 left-1/2 translate-x-[-45%] translate-y-[-50%]">
                    <g id="Page-1">
                        <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path
                                    d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                                    id="play-[#1003]">

                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            }
        </div>
    );
}