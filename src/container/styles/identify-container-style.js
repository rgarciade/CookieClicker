import { css } from 'lit';

export const identifyStyle = css`
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 55vh;
            font-size: 56px;
            gap: 80px;
        }
        .bests{
            min-height: 25vh;
        }
        .title {
            font-size: 56px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .error-span{
            font-size: 20px;
            color: red;
            font-weight: 600;
        }
    `;
