import type { SVGProps } from "react";

export const Icons = {
    personIcon: (props: SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            width={20}
            height={20}
        >
            <mask
                id='a'
                width={20}
                height={20}
                x={0}
                y={0}
                maskUnits='userSpaceOnUse'
                style={{
                    maskType: "alpha",
                }}
            >
                <path fill='#C4C4C4' d='M0 0h20v20H0z' />
            </mask>
            <g
                stroke='#01384D'
                strokeLinecap='round'
                strokeLinejoin='round'
                mask='url(#a)'
            >
                <circle cx={9.649} cy={5.648} r={3.982} />
                <path
                    d='M3.333 15.168c-.001-.28.062-.557.183-.809.381-.763 1.457-1.167 2.35-1.35.643-.137 1.296-.23 1.952-.275a20.872 20.872 0 0 1 3.654 0 14.14 14.14 0 0 1 1.953.275c.892.183 1.967.55 2.349 1.35.244.514.244 1.11 0 1.625-.381.8-1.457 1.167-2.35 1.342-.642.143-1.295.238-1.952.282-.99.084-1.983.1-2.975.046-.229 0-.45 0-.679-.046a12.852 12.852 0 0 1-1.945-.282c-.9-.175-1.968-.541-2.357-1.342a1.9 1.9 0 0 1-.183-.816Z'
                    clipRule='evenodd'
                />
            </g>
        </svg>
    ),

    passwordIcon: (props: SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            width={20}
            height={20}
        >
            <mask
                id='a'
                width={20}
                height={20}
                x={0}
                y={0}
                maskUnits='userSpaceOnUse'
                style={{
                    maskType: "alpha",
                }}
            >
                <path fill='#C4C4C4' d='M0 0h20v20H0z' />
            </mask>
            <g
                stroke='#01384D'
                strokeLinecap='round'
                strokeLinejoin='round'
                mask='url(#a)'
            >
                <path d='M13.477 8.082v-1.79A3.793 3.793 0 0 0 9.685 2.5a3.792 3.792 0 0 0-3.809 3.776V8.082' />
                <path
                    d='M12.86 17.917H6.494a3.16 3.16 0 0 1-3.16-3.16v-3.575a3.16 3.16 0 0 1 3.16-3.16h6.367a3.16 3.16 0 0 1 3.16 3.16v3.575a3.16 3.16 0 0 1-3.16 3.16Z'
                    clipRule='evenodd'
                />
                <path d='M9.677 12.044v1.851' />
            </g>
        </svg>
    ),
};
