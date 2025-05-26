import React from 'react';
import s from './Message.module.css';
import { MessageType } from '../HW1';

export type MessagePropsType = {
    message: MessageType;
};

const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            {/* Аватарка справа */}
            <img
                id={'hw1-avatar-' + props.message.id}
                src={props.message.user.avatar}
                alt="avatar"
                className={s.avatar}
            />

            {/* SVG с текстом и именем внутри */}
            <svg className={s.messageSvg} width="567" height="100" viewBox="0 0 567 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Фон сообщения */}
                <g filter="url(#filter0_dd_6_65)">
                    <path d="M20 25C20 19.4772 24.4772 15 30 15H525C530.523 15 535 19.4772 535 25V62.6581C535 64.142 535.659 65.5493 536.799 66.4992L547 75H527H432H30C24.4772 75 20 70.5228 20 65V25Z" fill="#0066CC" />
                </g>

                {/* Текст и имя внутри SVG */}
                <foreignObject x="40" y="20" width="400" height="60">
                    <div className={s.textContent}>
                        <div className={s.name}>{props.message.user.name}</div>
                        <pre className={s.messageText}>{props.message.message.text}</pre>
                    </div>
                </foreignObject>

                {/* Фильтры для SVG (оставьте как есть) */}
                <defs>
                    <filter id="filter0_dd_6_65" x="0" y="0" width="567" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.129412 0 0 0 0 0.14902 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_65" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="5" />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.129412 0 0 0 0 0.14902 0 0 0 0.03 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_6_65" result="effect2_dropShadow_6_65" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6_65" result="shape" />
                    </filter>
                </defs>
            </svg>

            {/* Время сообщения */}
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time}
            </div>
        </div>
    );
};

export default Message;