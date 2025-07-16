'use client';

import { Bar, BarChart, LabelList, XAxis } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import SectionTitle from '@/components/common/SectionTitle';

const chartData = [
    { week: '1주차', 금액: 4186 },
    { week: '2주차', 금액: 305 },
    { week: '3주차', 금액: 237 },
    { week: '4주차', 금액: 73 },
    { week: '5주차', 금액: 209 },
];
const chartConfig = {
    금액: {
        label: '금액',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig;
export default function AverageOrderValueChart() {
    return (
        <section>
            <SectionTitle title="주문 1회당 평균 금액" />
            <Card className="mt-2">
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                top: 16,
                                right: 16,
                                bottom: 16,
                                left: 16,
                            }}
                        >
                            <XAxis
                                dataKey="week"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                className=".recharts-cartesian-axis-tick-value"
                                tickFormatter={value => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="금액" fill="#3B82F6" radius={8}>
                                <LabelList
                                    position="top"
                                    offset={12}
                                    fontSize={12}
                                    formatter={(value: number) =>
                                        value.toLocaleString()
                                    }
                                    style={{
                                        fill: '#94a3b8',
                                        fontWeight: 'medium',
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
    );
}
