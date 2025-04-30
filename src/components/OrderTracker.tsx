
import React from 'react';
import { Check, Clock } from 'lucide-react';

type OrderStatus = 'accepted' | 'preparing' | 'delivering' | 'delivered';

interface OrderTrackerProps {
  status: OrderStatus;
  estimatedDelivery: string;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ status, estimatedDelivery }) => {
  const steps = [
    { id: 'accepted', label: 'Order Accepted' },
    { id: 'preparing', label: 'Preparing' },
    { id: 'delivering', label: 'On the Way' },
    { id: 'delivered', label: 'Delivered' },
  ];

  const getStepStatus = (stepId: string) => {
    const statusMap: Record<OrderStatus, number> = {
      accepted: 0,
      preparing: 1,
      delivering: 2,
      delivered: 3,
    };
    
    const currentStep = statusMap[status];
    const stepIndex = steps.findIndex(s => s.id === stepId);
    
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'current';
    return 'upcoming';
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">Order Status</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-1" />
          Est. delivery by {estimatedDelivery}
        </div>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-4 left-4 h-[calc(100%-32px)] w-0.5 bg-gray-200"></div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => {
            const stepStatus = getStepStatus(step.id);
            
            return (
              <div key={step.id} className="relative flex items-start">
                <div className={`
                  z-10 flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0
                  ${stepStatus === 'completed' ? 'bg-chef-success text-white' : 
                    stepStatus === 'current' ? 'bg-chef-primary text-white animate-pulse-slow' : 
                    'bg-gray-200 text-gray-400'}
                `}>
                  {stepStatus === 'completed' ? (
                    <Check size={16} />
                  ) : (
                    <span className="text-xs font-semibold">{steps.findIndex(s => s.id === step.id) + 1}</span>
                  )}
                </div>
                
                <div className="ml-4">
                  <p className={`font-medium ${
                    stepStatus === 'completed' ? 'text-chef-success' : 
                    stepStatus === 'current' ? 'text-chef-primary' : 
                    'text-gray-400'
                  }`}>
                    {step.label}
                  </p>
                  
                  {stepStatus === 'current' && (
                    <p className="text-sm text-gray-500 mt-1">
                      {step.id === 'accepted' && 'Chef is reviewing your order'}
                      {step.id === 'preparing' && 'Your delicious meal is being cooked'}
                      {step.id === 'delivering' && 'Driver is on the way to you'}
                      {step.id === 'delivered' && 'Enjoy your meal!'}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;
