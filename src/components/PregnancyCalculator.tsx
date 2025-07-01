/* tslint:disable */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Calendar, Baby, Heart, Activity, AlertCircle, CheckCircle } from 'lucide-react';

const PregnancyCalculator = () => {
  const [selectedMethod, setSelectedMethod] = useState('lmp');
  const [inputs, setInputs] = useState({
    lmpDate: '',
    conceptionDate: '',
    transferDate: '',
    embryoDay: '3',
    ultrasoundDate: '',
    gestationalWeeks: '',
    gestationalDays: ''
  });
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  // Date calculation utilities
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const getDaysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((date2 - date1) / oneDay);
  };

  const getWeeksAndDays = (totalDays) => {
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    return { weeks, days };
  };

  const getTrimester = (weeks) => {
    if (weeks <= 12) return '1st Trimester';
    if (weeks <= 26) return '2nd Trimester';
    return '3rd Trimester';
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Validation functions
  const validateDate = (dateString, fieldName, maxDaysAgo = 300) => {
    if (!dateString) {
      return `${fieldName} is required`;
    }

    const date = new Date(dateString);
    const today = new Date();
    today.setHours(23, 59, 59, 999); // End of today
    
    if (isNaN(date.getTime())) {
      return `Please enter a valid ${fieldName.toLowerCase()}`;
    }

    if (date > today) {
      return `${fieldName} cannot be in the future`;
    }

    const daysAgo = getDaysBetween(date, today);
    if (daysAgo > maxDaysAgo) {
      return `${fieldName} should be within the last ${maxDaysAgo} days`;
    }

    return null;
  };

  // Calculation functions
  const calculateLMP = (lmpDate) => {
    const lmp = new Date(lmpDate);
    const dueDate = addDays(lmp, 280);
    const today = new Date();
    const daysSinceLMP = getDaysBetween(lmp, today);
    const gestationalAge = getWeeksAndDays(daysSinceLMP);
    
    return {
      dueDate,
      gestationalAge,
      trimester: getTrimester(gestationalAge.weeks),
      method: 'Last Menstrual Period (LMP)',
      daysRemaining: Math.max(0, getDaysBetween(today, dueDate))
    };
  };

  const calculateConception = (conceptionDate) => {
    const conception = new Date(conceptionDate);
    const dueDate = addDays(conception, 266);
    const today = new Date();
    const daysSinceConception = getDaysBetween(conception, today);
    // Add 14 days to convert from conception age to gestational age
    const gestationalDays = daysSinceConception + 14;
    const gestationalAge = getWeeksAndDays(gestationalDays);
    
    return {
      dueDate,
      gestationalAge,
      trimester: getTrimester(gestationalAge.weeks),
      method: 'Conception Date',
      daysRemaining: Math.max(0, getDaysBetween(today, dueDate))
    };
  };

  const calculateIVF = (transferDate, embryoDay) => {
    const transfer = new Date(transferDate);
    const daysToAdd = embryoDay === '3' ? 263 : 261;
    const dueDate = addDays(transfer, daysToAdd);
    const today = new Date();
    const daysSinceTransfer = getDaysBetween(transfer, today);
    // Convert transfer date to gestational age
    const gestationalDays = daysSinceTransfer + (embryoDay === '3' ? 17 : 19);
    const gestationalAge = getWeeksAndDays(gestationalDays);
    
    return {
      dueDate,
      gestationalAge,
      trimester: getTrimester(gestationalAge.weeks),
      method: `IVF Transfer (${embryoDay}-day embryo)`,
      daysRemaining: Math.max(0, getDaysBetween(today, dueDate))
    };
  };

  const calculateUltrasound = (ultrasoundDate, weeks, days) => {
    const scanDate = new Date(ultrasoundDate);
    const today = new Date();
    const daysSinceScan = getDaysBetween(scanDate, today);
    const scanGestationalDays = parseInt(weeks) * 7 + parseInt(days);
    const currentGestationalDays = scanGestationalDays + daysSinceScan;
    const gestationalAge = getWeeksAndDays(currentGestationalDays);
    
    // Calculate due date: 40 weeks - current gestational age
    const remainingDays = (40 * 7) - currentGestationalDays;
    const dueDate = addDays(today, remainingDays);
    
    return {
      dueDate,
      gestationalAge,
      trimester: getTrimester(gestationalAge.weeks),
      method: 'Ultrasound Scan',
      scanInfo: `Scan at ${weeks} weeks, ${days} days`,
      daysRemaining: Math.max(0, remainingDays)
    };
  };

  // Main calculation function
  const calculateResults = () => {
    const newErrors = {};
    let calculationResult = null;

    try {
      switch (selectedMethod) {
        case 'lmp':
          const lmpError = validateDate(inputs.lmpDate, 'Last menstrual period date');
          if (lmpError) {
            newErrors.lmpDate = lmpError;
          } else {
            calculationResult = calculateLMP(inputs.lmpDate);
          }
          break;

        case 'conception':
          const conceptionError = validateDate(inputs.conceptionDate, 'Conception date', 280);
          if (conceptionError) {
            newErrors.conceptionDate = conceptionError;
          } else {
            calculationResult = calculateConception(inputs.conceptionDate);
          }
          break;

        case 'ivf':
          const transferError = validateDate(inputs.transferDate, 'Transfer date', 280);
          if (transferError) {
            newErrors.transferDate = transferError;
          } else {
            calculationResult = calculateIVF(inputs.transferDate, inputs.embryoDay);
          }
          break;

        case 'ultrasound':
          const ultrasoundError = validateDate(inputs.ultrasoundDate, 'Ultrasound date', 280);
          if (ultrasoundError) {
            newErrors.ultrasoundDate = ultrasoundError;
          } else if (!inputs.gestationalWeeks || inputs.gestationalWeeks < 4 || inputs.gestationalWeeks > 42) {
            newErrors.gestationalWeeks = 'Please enter weeks between 4 and 42';
          } else if (!inputs.gestationalDays || inputs.gestationalDays < 0 || inputs.gestationalDays > 6) {
            newErrors.gestationalDays = 'Please enter days between 0 and 6';
          } else {
            calculationResult = calculateUltrasound(
              inputs.ultrasoundDate,
              inputs.gestationalWeeks,
              inputs.gestationalDays
            );
          }
          break;
      }
    } catch (error) {
      newErrors.general = 'An error occurred during calculation. Please check your inputs.';
    }

    setErrors(newErrors);
    setResults(Object.keys(newErrors).length === 0 ? calculationResult : null);
  };

  // Effect to trigger calculation when inputs change
  useEffect(() => {
    const hasRequiredInputs = () => {
      switch (selectedMethod) {
        case 'lmp':
          return inputs.lmpDate;
        case 'conception':
          return inputs.conceptionDate;
        case 'ivf':
          return inputs.transferDate;
        case 'ultrasound':
          return inputs.ultrasoundDate && inputs.gestationalWeeks && inputs.gestationalDays;
        default:
          return false;
      }
    };

    if (hasRequiredInputs()) {
      calculateResults();
    } else {
      setResults(null);
      setErrors({});
    }
  }, [selectedMethod, inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
    setResults(null);
    setErrors({});
  };

  const resetCalculator = () => {
    setInputs({
      lmpDate: '',
      conceptionDate: '',
      transferDate: '',
      embryoDay: '3',
      ultrasoundDate: '',
      gestationalWeeks: '',
      gestationalDays: ''
    });
    setResults(null);
    setErrors({});
  };

  // Progress bar calculation
  const getProgressPercentage = () => {
    if (!results) return 0;
    const totalDays = 280; // 40 weeks
    const daysElapsed = totalDays - results.daysRemaining;
    return Math.min(100, Math.max(0, (daysElapsed / totalDays) * 100));
  };

  const methods = [
    {
      id: 'lmp',
      name: 'Last Menstrual Period',
      icon: Calendar,
      description: 'Most common method using your last period date'
    },
    {
      id: 'conception',
      name: 'Conception Date',
      icon: Heart,
      description: 'For tracked ovulation or known conception'
    },
    {
      id: 'ivf',
      name: 'IVF Transfer',
      icon: Activity,
      description: 'Precise calculation for IVF pregnancies'
    },
    {
      id: 'ultrasound',
      name: 'Ultrasound Scan',
      icon: Baby,
      description: 'Based on fetal measurements from scan'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Pregnancy Due Date Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Calculate your estimated due date using multiple proven methods
          </p>
        </div>

        {/* Method Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Calculation Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => handleMethodChange(method.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:cursor-pointer ${
                    selectedMethod === method.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${
                    selectedMethod === method.id ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <h3 className="font-semibold text-sm mb-1">{method.name}</h3>
                  <p className="text-xs text-gray-600">{method.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Your Information</h2>
          
          {selectedMethod === 'lmp' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First day of your last menstrual period
                </label>
                <input
                  type="date"
                  value={inputs.lmpDate}
                  onChange={(e) => handleInputChange('lmpDate', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:cursor-pointer ${
                    errors.lmpDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                  max={new Date().toISOString().split('T')[0]}
                />
                {errors.lmpDate && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.lmpDate}
                  </p>
                )}
              </div>
            </div>
          )}

          {selectedMethod === 'conception' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conception date
                </label>
                <input
                  type="date"
                  value={inputs.conceptionDate}
                  onChange={(e) => handleInputChange('conceptionDate', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:cursor-pointer ${
                    errors.conceptionDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                  max={new Date().toISOString().split('T')[0]}
                />
                {errors.conceptionDate && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.conceptionDate}
                  </p>
                )}
              </div>
            </div>
          )}

          {selectedMethod === 'ivf' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Embryo transfer date
                </label>
                <input
                  type="date"
                  value={inputs.transferDate}
                  onChange={(e) => handleInputChange('transferDate', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:cursor-pointer ${
                    errors.transferDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                  max={new Date().toISOString().split('T')[0]}
                />
                {errors.transferDate && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.transferDate}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Embryo transfer day
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="3"
                      checked={inputs.embryoDay === '3'}
                      onChange={(e) => handleInputChange('embryoDay', e.target.value)}
                      className="mr-2"
                    />
                    3-day embryo
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="5"
                      checked={inputs.embryoDay === '5'}
                      onChange={(e) => handleInputChange('embryoDay', e.target.value)}
                      className="mr-2"
                    />
                    5-day embryo
                  </label>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'ultrasound' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ultrasound scan date
                </label>
                <input
                  type="date"
                  value={inputs.ultrasoundDate}
                  onChange={(e) => handleInputChange('ultrasoundDate', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:cursor-pointer ${
                    errors.ultrasoundDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                  max={new Date().toISOString().split('T')[0]}
                />
                {errors.ultrasoundDate && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.ultrasoundDate}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gestational weeks at scan
                  </label>
                  <input
                    type="number"
                    min="4"
                    max="42"
                    value={inputs.gestationalWeeks}
                    onChange={(e) => handleInputChange('gestationalWeeks', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.gestationalWeeks ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 12"
                  />
                  {errors.gestationalWeeks && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.gestationalWeeks}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional days
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="6"
                    value={inputs.gestationalDays}
                    onChange={(e) => handleInputChange('gestationalDays', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.gestationalDays ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 3"
                  />
                  {errors.gestationalDays && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.gestationalDays}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {results && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">Your Results</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Estimated Due Date</h3>
                  <p className="text-2xl font-bold text-blue-900">{formatDate(results.dueDate)}</p>
                  <p className="text-sm text-blue-700 mt-1">Method: {results.method}</p>
                  {results.scanInfo && (
                    <p className="text-sm text-blue-700">{results.scanInfo}</p>
                  )}
                </div>
                
                <div className="bg-pink-50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Current Status</h3>
                  <p className="text-xl font-bold text-pink-900">
                    {results.gestationalAge.weeks} weeks, {results.gestationalAge.days} days
                  </p>
                  <p className="text-sm text-pink-700">{results.trimester}</p>
                  <p className="text-sm text-pink-700 mt-1">
                    {results.daysRemaining} days remaining
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Pregnancy Progress</h3>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-pink-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  {Math.round(getProgressPercentage())}% Complete
                </p>
                
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                  <div className={`p-2 rounded ${results.trimester === '1st Trimester' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                    1st Trimester<br />
                    <span className="text-xs">Weeks 1-12</span>
                  </div>
                  <div className={`p-2 rounded ${results.trimester === '2nd Trimester' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                    2nd Trimester<br />
                    <span className="text-xs">Weeks 13-26</span>
                  </div>
                  <div className={`p-2 rounded ${results.trimester === '3rd Trimester' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                    3rd Trimester<br />
                    <span className="text-xs">Weeks 27-40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={resetCalculator}
            className="bg-gray-500 hover:bg-gray-600 hover:cursor-pointer text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Reset Calculator
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Medical Disclaimer</p>
              <p>
                This calculator provides estimates only. Only about 5% of babies are born on their exact due date. 
                Most babies are born within two weeks of the estimated due date. Always consult with your healthcare 
                provider for accurate pregnancy monitoring and medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyCalculator;