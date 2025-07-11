import { Table, Card } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../components/table.css";

const ReportTable = () => {
    const { t } = useTranslation();

    const columns = [
        {
            title: t('profitLoss'),
            dataIndex: 'category',
            key: 'category',
            onCell: (record) => ({
                style: record.highlight ? { color: '#1677ff', fontWeight: '600' } : {},
            }),
            render: (text) => <span>{text}</span>,
        },
        { title: t('june'), dataIndex: 'june', key: 'june' },
        { title: t('budget'), dataIndex: 'budget', key: 'budget' },
        { title: t('projection'), dataIndex: 'projection', key: 'projection' },
        { title: t('vsBudget'), dataIndex: 'vsBudget', key: 'vsBudget' },
        {
            title: t('vsBudgetPercent'),
            dataIndex: 'percentage',
            key: 'percentage',
            render: (text) => {
                if (!text) return null;
                let color = 'black';
                if (text.startsWith('-')) color = 'red';
                else if (text !== '0.00%') color = '#52c41a';
                return <span style={{ color }}>{text}</span>;
            },
        },
    ];

    const data = [
        { key: '1', category: 'Revenue', highlight: true },
        { key: '2', category: 'Branding', june: '£105,300', budget: '£867,000', projection: '£1,182,900', vsBudget: '£315,900', percentage: '36.44%' },
        { key: '3', category: 'Web Development', june: '£34,600', budget: '£218,800', projection: '£345,800', vsBudget: '£127,400', percentage: '58.25%' },
        { key: '4', category: 'Marketing & Advertising Services', june: '£61,000', budget: '£444,000', projection: '£619,600', vsBudget: '£175,600', percentage: '39.55%' },
        { key: '5', category: 'Social Media Management', june: '£52,500', budget: '£504,000', projection: '£629,000', vsBudget: '£125,000', percentage: '24.80%' },
        { key: '6', category: 'Retainer Fees', june: '£4,020', budget: '£80,400', projection: '£40,970', vsBudget: '-£19,430', percentage: '-24.17%' },
        { key: '7', category: 'Total Revenue', june: '£257,420', budget: '£2,114,200', projection: '£2,818,270', vsBudget: '£724,470', percentage: '6.38%', highlight: true },
        { key: '8', category: 'Expenses', highlight: true },
        { key: '9', category: 'Staff Expenses', highlight: true },
        { key: '10', category: 'Salaries & Wages', june: '£135,850', budget: '£1,412,350', projection: '£1,447,800', vsBudget: '£35,450', percentage: '2.51%' },
        { key: '11', category: 'Training & Education', june: '£320', budget: '£3,328', projection: '£3,408', vsBudget: '£80', percentage: '2.40%' },
        { key: '12', category: 'Total Staff Expenses', june: '£136,170', budget: '£1,415,678', projection: '£1,451,208', vsBudget: '£35,530', percentage: '2.51%', highlight: true },
        { key: '13', category: 'Marketing & Advertising', highlight: true },
        { key: '14', category: 'Marketing Research', june: '£27,600', budget: '£165,600', projection: '£253,200', vsBudget: '£87,600', percentage: '52.90%' },
        { key: '15', category: 'Marketing Channels', highlight: true },
        { key: '16', category: 'Online Advertising', june: '£28,442', budget: '£231,780', projection: '£303,040', vsBudget: '£71,260', percentage: '30.74%' },
        { key: '17', category: 'Print Advertising', june: '£4,880', budget: '£35,520', projection: '£49,568', vsBudget: '£14,048', percentage: '39.55%' },
        { key: '18', category: 'Social Media Campaigns', june: '£20,479', budget: '£208,080', projection: '£247,944', vsBudget: '£39,864', percentage: '19.16%' },
        { key: '19', category: 'Total Marketing Channels', june: '£53,801', budget: '£475,380', projection: '£600,552', vsBudget: '£125,172', percentage: '26.33%', highlight: true },
        { key: '20', category: 'Total Marketing & Advertising', june: '£81,401', budget: '£640,980', projection: '£853,752', vsBudget: '£212,772', percentage: '33.19%', highlight: true },
        { key: '21', category: 'Website & Software', highlight: true },
    ];

    const rowClassName = (record) => (record.highlight ? 'highlight-row' : '');

    return (
        <Card
            title={<span className="text-lg font-semibold">{t('tableTitle')}</span>}
            variant="outlined"
            styles={{ body: { padding: 24 } }}
            className="mt-6 rounded-lg shadow-md"
        >
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                rowKey="key"
                rowClassName={rowClassName}
                className="report-table"
            />
        </Card>
    );
};

export default ReportTable;
