import React, { useRef, useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2'; // Changed Pie to Doughnut
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const BudgetAllocated = () => {
    const totalBudget = 100000; // Example value
    const coachBudget = 50000; // Example value
    const expenses = 30000; // Example value
    const remainingBalance = coachBudget - expenses;

    // Data for bar chart
    const barData = {
        labels: ['Total Budget', 'Coach Budget', 'Expenses', 'Remaining Balance'],
        datasets: [
            {
                label: 'Budget Breakdown',
                data: [totalBudget, coachBudget, expenses, remainingBalance],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(33, 150, 243, 0.7)',
                    'rgba(255, 87, 34, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(33, 150, 243, 1)',
                    'rgba(255, 87, 34, 1)',
                    'rgba(255, 193, 7, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    // Data for doughnut chart
    const doughnutData = {
        labels: ['Expenses', 'Remaining'],
        datasets: [
            {
                data: [expenses, remainingBalance],
                backgroundColor: ['rgba(255, 87, 34, 0.6)', 'rgba(76, 175, 80, 0.6)'],
                hoverBackgroundColor: ['rgba(255, 87, 34, 0.8)', 'rgba(76, 175, 80, 0.8)'],
                borderColor: ['rgba(255, 87, 34, 1)', 'rgba(76, 175, 80, 1)'],
                borderWidth: 2,
                hoverOffset: 12,
            },
        ],
    };

    // Chart options for enhanced styling
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#444',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: { size: 16, weight: 'bold' },
                bodyFont: { size: 14 },
                cornerRadius: 5,
            },
            title: {
                display: true,
                text: 'Budget Overview',
                color: '#222',
                font: {
                    size: 20,
                    weight: 'bold',
                },
            },
        },
    };

    const chartContainerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    // Dynamically update chart size based on parent container size
    useEffect(() => {
        const updateSize = () => {
            if (chartContainerRef.current) {
                setContainerWidth(chartContainerRef.current.offsetWidth);
            }
        };

        // Initial size update
        updateSize();

        // Throttling the resize event listener
        const handleResize = () => {
            window.requestAnimationFrame(updateSize);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-6 p-4 max-w-screen overflow-hidden">
            <div
                ref={chartContainerRef}
                className="relative w-full lg:w-1/2 max-w-full h-auto rounded-lg shadow-lg bg-white p-4"
                style={{
                    maxWidth: '100%',
                    height: containerWidth ? `${containerWidth / 1.5}px` : 'auto', // Dynamically adjust height based on width (adjust ratio as needed)
                }}
            >
                <Bar
                    data={barData}
                    options={{
                        ...commonOptions,
                        maintainAspectRatio: false,
                    }}
                />
            </div>
            <div
                className="relative w-full lg:w-1/2 max-w-full h-auto rounded-lg shadow-lg bg-white p-4"
                style={{
                    maxWidth: '100%',
                    height: containerWidth ? `${containerWidth / 1.5}px` : 'auto', // Dynamically adjust height based on width (adjust ratio as needed)
                }}
            >
                <Doughnut
                    data={doughnutData} // Replaced Pie with Doughnut
                    options={{
                        ...commonOptions,
                        maintainAspectRatio: false,
                    }}
                />
            </div>
        </div>
    );
};

export default BudgetAllocated;
