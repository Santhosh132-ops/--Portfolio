import React from 'react';
import './HorizontalSkills.css';

const skills = [
    { name: 'Node.js', icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' },
    { name: 'Docker', icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000' },
    { name: 'Kubernetes', icon: 'https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000' },
    { name: 'React', icon: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000' },
    { name: 'AWS', icon: 'https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000' },
    { name: 'FireBase', icon:'https://img.icons8.com/?size=100&id=62452&format=png&color=000000'},
    { name: 'Redis', icon: 'https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000' },
    { name: 'Git', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
    { name: 'Linux', icon: 'https://img.icons8.com/?size=100&id=17842&format=png&color=000000' }
];

const HorizontalSkills = () => (
    <section className="skills-marquee" aria-label="Scrolling skills showcase">
        <div className="marquee-content">
            {skills.map((skill, idx) => (
                <span key={idx} className="skill-item">
                    <img className="skill-icon" src={skill.icon} alt={`${skill.name} icon`} loading="lazy" />
                    <span className="skill-name">{skill.name}</span>
                </span>
            ))}
            {/* duplicate for seamless infinite scroll */}
            {skills.map((skill, idx) => (
                <span key={`dup-${idx}`} className="skill-item">
                    <img className="skill-icon" src={skill.icon} alt={`${skill.name} icon`} loading="lazy" />
                    <span className="skill-name">{skill.name}</span>
                </span>
            ))}
        </div>
    </section>
);

export default HorizontalSkills;

