'use client';
import { getLinksLinks } from 'csc-start/utils/data';

const NonSocialLinks = () => {
    const links = getLinksLinks();

    return (
        <div className="flex flex-col mt-[60px] mb-[60px]">
            {links.map(({ url, title }, index) => (
                <button
                    key={index}
                    className="button mt-[15px] mb-[15px]"
                    onClick={() => window.open(url, '_blank')}
                    style={{
                        paddingBottom: '0.25em',
                    }}
                >
                    {title}
                </button>
            ))}
        </div>
    );
};

export default NonSocialLinks;
