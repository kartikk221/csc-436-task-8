import Image from 'next/image';
import { getCurrentUser } from '../utils/data';

const { name, avatar } = getCurrentUser();

const TopContent = () => {
    return (
        <div className="flex flex-col justify-between items-center mt-[60px] mb-[60px]">
            <Image
                src={avatar}
                alt="Avatar"
                width={145}
                height={145}
                style={{
                    borderRadius: '360px',
                    boxSizing: 'border-box',
                    border: '1px solid #000000',
                }}
            />

            <h1
                style={{
                    fontSize: '48px',
                    marginTop: '24px',
                    fontWeight: '800',
                    lineHeight: '48px',
                }}
            >
                {name}
            </h1>
        </div>
    );
};

export default TopContent;
