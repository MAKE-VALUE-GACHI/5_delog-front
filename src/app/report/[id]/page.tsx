'use client';

import Header from '@/components/layout/Header';
import { useState } from 'react';
import Start from './_components/Start';
import Step1 from './_components/Step1';
import Step2 from './_components/Step2';
import Step3 from './_components/Step3';
import Step4 from './_components/Step4';

export default function Page() {
    const [step, setStep] = useState(0);

    const goNext = () => setStep(step + 1);

    const backgroundColor = [
        '#3B82F6',
        '#ff2b3a',
        '#ffca00',
        '#00c94f',
        '#f0f5f9',
    ];

    return (
        <div
            className="p-4 h-screen"
            style={{ backgroundColor: backgroundColor[step] }}
        >
            <Header type="back" />

            {step === 0 && <Start goNext={goNext} />}
            {step === 1 && <Step1 goNext={goNext} />}
            {step === 2 && <Step2 goNext={goNext} />}
            {step === 3 && <Step3 goNext={goNext} />}
            {step === 4 && <Step4 />}
        </div>
    );
}
