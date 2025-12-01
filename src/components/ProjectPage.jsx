import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ProjectPage = () => {
    const { id } = useParams();

    // In the future, we can fetch project details here based on ID.
    // For now, we return the "Under Construction" view for all projects.

    return (
        <NotFound
            title="INITIALIZING..."
            mainText="PROJECT"
            subtitle="This project is currently being deployed to the portfolio."
            buttonText="RETURN TO PROJECTS"
            customLogs={[
                { text: "> Detecting project configuration...", delay: 500 },
                { text: "> Loading architecture diagrams...", delay: 1200 },
                { text: "> Connecting to live demo environment...", delay: 2200 },
                { text: "> ERROR: Deployment pending approval", delay: 3000, color: '#ff4757' },
                { text: "> Status: Awaiting final build", delay: 3800, color: '#ffa502' },
                { text: "> Estimated completion: SOON", delay: 4500 }
            ]}
        />
    );
};

export default ProjectPage;
