import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { BarChartOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const TabSelector = () => {
    const { t } = useTranslation();

    return (
        <Tabs defaultActiveKey="1" className="custom-tabs">
            <TabPane
                tab={<span><BarChartOutlined className="mr-2" /> {t('actualVsBudget')}</span>}
                key="1"
            />
            <TabPane
                tab={<span><DollarCircleOutlined className="mr-2" /> {t('incomeExpense')}</span>}
                key="2"
            />
        </Tabs>
    );
};

export default TabSelector;
