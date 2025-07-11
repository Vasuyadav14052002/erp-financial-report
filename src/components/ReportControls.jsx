// File: src/components/ReportControls.jsx
import { Select, Button, Space } from 'antd';
import { FileExcelOutlined, PrinterOutlined, EyeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const ReportControls = ({ year, setYear, month, setMonth, onViewReport }) => {
    const { t } = useTranslation();

    return (
        <div className="p-4 rounded-lg shadow-sm mt-7 mb-7 bg-gray-50">
            <div className="flex flex-wrap items-center justify-between gap-6">

                {/* Year & Month dropdowns */}
                <div className="flex gap-10">
                    <div>
                        <label className="block mb-1 text-sm font-medium">{t('year')}:</label>
                        <Select value={year} onChange={setYear} style={{ width: 120 }}>
                            <Select.Option value="2025">2025</Select.Option>
                            <Select.Option value="2024">2024</Select.Option>
                            <Select.Option value="2023">2023</Select.Option>
                            <Select.Option value="2022">2022</Select.Option>
                            <Select.Option value="2021">2021</Select.Option>
                            <Select.Option value="2020">2020</Select.Option>
                        </Select>
                    </div>

                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">{t('month')}:</label>
                    <Select value={month} onChange={setMonth} style={{ width: 140 }}>
                        <Select.Option value="January 2025">January 2025</Select.Option>
                        <Select.Option value="February 2025">February 2025</Select.Option>
                        <Select.Option value="March 2025">March 2025</Select.Option>
                        <Select.Option value="April 2025">April 2025</Select.Option>
                        <Select.Option value="May 2025">May 2025</Select.Option>
                        <Select.Option value="June 2025">June 2025</Select.Option>
                        <Select.Option value="July 2025">July 2025</Select.Option>
                    </Select>
                </div>

                {/* Action buttons */}
                <Space wrap size="middle">
                    <Button type="primary" icon={<EyeOutlined />} onClick={onViewReport}>
                        {t('viewReport')}
                    </Button>
                    <Button icon={<FileExcelOutlined />}>{t('exportToExcel')}</Button>
                    <Button icon={<PrinterOutlined />}>{t('printReport')}</Button>
                </Space>
            </div>
        </div>
    );
};

export default ReportControls;
