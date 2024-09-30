
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import './dashboard.css';


export type PsychologistType = {
    id : string,
    full_name: string,
    score: string,
    feedback: string,
    other_feedback: Record<string, string>,
}

const Dashboard = () => {
    const [psychologists, setPsychologists] = useState<PsychologistType[]>([]);
    const [otherFeedback, setOtherFeedback] = useState<Record<string, string>>({});

    const fetchPsychologistData = async () => {
        const response = await fetch('data/data.json');
        const data = await response.json();
        setPsychologists(data);
    };

    useEffect(() => {
        fetchPsychologistData();
    }, []);

    const showOtherFeedback = (id: string) => {
        setOtherFeedback(psychologists.find((psychologist) => psychologist.id === id)?.other_feedback || {});
    }

    const sortPsychologistsByScore = () => {
        const sortedPsychologists = [...psychologists].sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        setPsychologists(sortedPsychologists);
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Click on card to see other feedback</p>
            <Button variant="contained" onClick={sortPsychologistsByScore}>Sort Psychologists by Score</Button>
            <div className="dashboard-wrapper">
                {psychologists.map((psychologist) => (
                    <div className="dashboard-card" key={psychologist.id}>
                        <Card onClick={() => showOtherFeedback(psychologist.id)}>
                            <h2>{psychologist.full_name}</h2>
                            <p>Score: {psychologist.score}</p>
                            <p>Feedback: {psychologist.feedback}</p>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="other-feedback">
                {otherFeedback && Object.entries(otherFeedback).map(([key, value], index) => (
                    <div className="other-feedback__item" key={index}>
                        <strong>
                            <p className="other-feedback__item--margin">{key}</p>
                        </strong>
                        <p>"{value}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;