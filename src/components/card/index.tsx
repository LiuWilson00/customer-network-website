import React from 'react';

type CardProps = {
  title: string;
  id: number;
  className?: string;
  onIdClick?: (id: number) => void;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: (id: number) => void;
  idDisabled?: boolean;
};

const Card: React.FC<CardProps> = ({ title, id, className, onIdClick, onMouseEnter, onMouseLeave, idDisabled }) => {

  const handleIdClick = () => {
    if (onIdClick) {
      onIdClick(id);
    }
  };
  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter(id);
    }
  };
  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave(id);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`card-outer ${className}`}>
      <div className="card-wrap">
        <h2 className="card-title" >
          <a href="#" onClick={handleIdClick} className={idDisabled ? 'text-slate-500' : 'text-cyan-600'}>id: #{id}</a>
        </h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
