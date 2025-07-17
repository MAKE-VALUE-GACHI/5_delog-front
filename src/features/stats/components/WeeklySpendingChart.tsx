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
    // { week: '2주차', 금액: 305 },
    // { week: '3주차', 금액: 237 },
    // { week: '4주차', 금액: 73 },
    // { week: '5주차', 금액: 209 },
];
const chartConfig = {
    금액: {
        label: '금액',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig;

const isInsufficientData =
    chartData.length === 0 ||
    (chartData.length === 1 && chartData[0].week === '1주차');

export default function WeeklySpendingChart() {
    return (
        <section>
            <SectionTitle title="주차별 지출 그래프" />
            {isInsufficientData ? (
                <div className="relative py-20 text-center mt-2">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {/* 상단 */}
                        <line
                            x1="8"
                            y1="0"
                            x2="calc(100% - 8px)"
                            y2="0"
                            stroke="#94a3b8"
                            strokeWidth="2"
                            strokeDasharray="20 10"
                        />
                        {/* 우측 */}
                        <line
                            x1="100%"
                            y1="8"
                            x2="100%"
                            y2="calc(100% - 8px)"
                            stroke="#94a3b8"
                            strokeWidth="2"
                            strokeDasharray="20 10"
                        />
                        {/* 하단 */}
                        <line
                            x1="calc(100% - 8px)"
                            y1="100%"
                            x2="8"
                            y2="100%"
                            stroke="#94a3b8"
                            strokeWidth="2"
                            strokeDasharray="20 10"
                        />
                        {/* 좌측 */}
                        <line
                            x1="0"
                            y1="calc(100% - 8px)"
                            x2="0"
                            y2="8"
                            stroke="#94a3b8"
                            strokeWidth="2"
                            strokeDasharray="20 10"
                        />
                    </svg>
                    <p className="text-slate-400 text-base font-medium">
                        아직 데이터가 충분하지 않아요
                    </p>
                </div>
            ) : (
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
            )}
        </section>
    );
}
