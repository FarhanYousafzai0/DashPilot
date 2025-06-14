// CardData.jsx
import {
  Users,
  CheckCircle,
  TimerReset,
  UserCheck,
} from 'lucide-react';

export const cardData = [

    {
    title: "Total Users",
    value: 58,
    icon: <UserCheck className="w-6 h-6 text-white" />,
    growth: "↑ Increased from last week",
  
  },
  {
    title: "Total Projects",
    value: 24,
    icon: <Users className="w-6 h-6 text-white" />,
    growth: "↑ Increased from last month",
   
  },
  
  {
    title: "Running Projects",
    value: 12,
    icon: <TimerReset className="w-6 h-6 text-white" />,
    growth: "↑ Increased from last month",
   
  },
  
];
