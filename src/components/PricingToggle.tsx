interface PricingToggleProps {
  period: 'monthly' | 'annual' | 'semi-annual';
  onPeriodChange: (period: 'monthly' | 'annual' | 'semi-annual') => void;
}

const PricingToggle = ({ period, onPeriodChange }: PricingToggleProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
      <div className="flex items-center bg-secondary rounded-lg p-1">
        <button
          onClick={() => onPeriodChange('monthly')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            period === 'monthly'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => onPeriodChange('semi-annual')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            period === 'semi-annual'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Semi-Annual
        </button>
        <button
          onClick={() => onPeriodChange('annual')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            period === 'annual'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Annual
        </button>
      </div>
      
      {period === 'annual' && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30">
          <span className="text-xs font-medium text-neon-blue">Save up to 25%</span>
        </div>
      )}
      
      {period === 'semi-annual' && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border border-neon-purple/30">
          <span className="text-xs font-medium text-neon-purple">Save 10%</span>
        </div>
      )}
    </div>
  );
};

export default PricingToggle;