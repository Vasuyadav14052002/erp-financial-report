import { Card } from 'antd';
import Header from '../components/Header';
import TabSelector from '../components/TabSelector';
import ReportControls from '../components/ReportControls';
import ReportTable from '../components/ReportTable';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ActualVsBudget = () => {
    const [year, setYear] = useState('2024');
    const [month, setMonth] = useState('June 2025');
    const { t } = useTranslation();

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <Card
                bordered={false}
                className="rounded-lg shadow-sm"
                bodyStyle={{ padding: '24px 32px' }}
            >
                {/* Header and Tabs */}
                <Header />
                <TabSelector />

                {/* Top section with title + saved text */}
                <div className="flex items-start justify-between mt-6">
                    <div>
                        <h2 className="mb-1 text-lg font-semibold">{t('actualVsBudget')}</h2>
                        <p className="text-gray-500">{month}</p>
                    </div>
                    <p className="text-sm text-gray-400">{t('savedText')}</p>
                </div>

                {/* Filters + Buttons */}
                <ReportControls
                    year={year}
                    setYear={setYear}
                    month={month}
                    setMonth={setMonth}
                    onViewReport={() => console.log('Viewing report...')}
                />

                {/* Table */}
                <ReportTable />
            </Card>
        </div>
    );
};

export default ActualVsBudget;
