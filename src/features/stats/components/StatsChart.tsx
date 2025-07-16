'use client';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
export const description = 'A bar chart with a label';
const chartData = [
    { week: '1주차', desktop: 4186 },
    { week: '2주차', desktop: 305 },
    { week: '3주차', desktop: 237 },
    { week: '4주차', desktop: 73 },
    { week: '5주차', desktop: 209 },
];
const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig;
export default function StatsChart() {
    return (
        <Card>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
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
                        <Bar dataKey="desktop" fill="#3B82F6" radius={8}>
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
    );
}
