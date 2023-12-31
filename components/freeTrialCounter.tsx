'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import { useProModal } from '@/hooks/use-pro-modal';

interface FreeTrialCounterProps {
  apiCount: number;
  isPro: boolean;
}

const FreeTrialCounter = ({ apiCount = 0, isPro = false }: FreeTrialCounterProps) => {
  const proModal = useProModal();
  const [ismounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!ismounted) {
    return null;
  }

  if (isPro) {
    return null;
  }

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0'>
        <CardContent className='py-6'>
          <div className='flex flex-col gap-2 items-center text-xs text-white mb-4'>
            <p>
              {Number(MAX_FREE_COUNTS) - Number(apiCount)} / {MAX_FREE_COUNTS}
            </p>
            <p>Free generations left</p>
            <Progress className='h-3' value={((Number(MAX_FREE_COUNTS) - Number(apiCount)) / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button onClick={proModal.onOpen} className='w-full' variant='pro'>
            Upgrade <Sparkles className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeTrialCounter;
