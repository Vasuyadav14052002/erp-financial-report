import { Select, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const USFlag = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" width="20" height="20">
        <rect width="7410" height="3900" fill="#b31942" />
        <g stroke="#fff" strokeWidth="300">
            {[...Array(6)].map((_, i) => (
                <line key={i} x1="0" y1={450 + 600 * i} x2="7410" y2={450 + 600 * i} />
            ))}
        </g>
        <rect width="2964" height="2100" fill="#0a3161" />
        <g fill="#fff">
            {[...Array(9)].map((_, row) =>
                [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => {
                    const x = 247 + col * 494 + (row % 2 === 0 ? 0 : 247);
                    const y = 210 + row * 210;
                    return (
                        <polygon
                            key={`${row}-${col}`}
                            points="247,90 317.5,307.1 132.9,172.9 361.1,172.9 176.5,307.1"
                            transform={`translate(${x - 247}, ${y - 90})`}
                        />
                    );
                })
            )}
        </g>
    </svg>
);

const ESFlag = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="20" height="20">
        <rect width="900" height="600" fill="#aa151b" />
        <rect y="200" width="900" height="200" fill="#f1bf00" />
    </svg>
);

const Header = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value);
    };

    const languages = [
        { code: 'en', label: 'English', flag: USFlag },
        { code: 'es', label: 'Español', flag: ESFlag },
    ];

    return (
        <div className="flex items-center justify-between p-4">
            <Typography.Title level={4} style={{ margin: 0 }}>
                {t('title')}
            </Typography.Title>

            <Select
                value={i18n.language}
                onChange={handleChange}
                style={{ minWidth: 160 }}
                size="middle"
                dropdownMatchSelectWidth={false}
            >
                {languages.map((lang) => (
                    <Option key={lang.code} value={lang.code}>
                        <div className="flex items-center gap-2">
                            {lang.flag}
                            <span>{lang.label}</span>
                        </div>
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default Header;
