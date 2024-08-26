import React, { FC } from 'react';

interface EmptyStateProps {
   message: string;
}

const EmptyState: FC<EmptyStateProps> = ({ message }) => {
   return <p className="text-gray-500">{message}</p>;
};

export default EmptyState;