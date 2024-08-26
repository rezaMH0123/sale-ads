import React, { FC } from 'react'
import { DescriptionProps } from './description-card.type'

export const DescriptionCard: FC<DescriptionProps> = ({ title, children, description }) => {
   return (
      <div className="text-gray-800 bg-neutral-100 p-2 rounded-md">
         <h3 className="text-xl">{title}</h3>
         <p className="mt-2">
            {description || children}
         </p>
      </div>
   )
}
