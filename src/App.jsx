import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import OppositeDirectionalGif from '@/components/animations/gifs/OppositeDirectionalGif';
import ParallelGif from '@/components/animations/gifs/ParallelGif';
import PartitionGif from '@/components/animations/gifs/PartitionGif';
import SameDirectionalGif from '@/components/animations/gifs/SameDirectionalGif';
import SlidingWindowGif from '@/components/animations/gifs/SlidingWindowGif';

import CycleDetectionAnimation from '@/components/animations/interactive/CycleDetectionAnimation';
import LongestSubstringAnimation from '@/components/animations/interactive/LongestSubstringAnimation';
import MaxAverageAnimation from '@/components/animations/interactive/MaxAverageAnimation';
import MergeSortedAnimation from '@/components/animations/interactive/MergeSortedAnimation';
import SortColorsAnimation from '@/components/animations/interactive/SortColorsAnimation';
import TwoSumAnimation from '@/components/animations/interactive/TwoSumAnimation';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={
                        <div className="h-screen w-full flex items-center justify-center">
                            <h1 className="text-6xl font-bold">hii</h1>
                        </div>
                    } />

                    {/* Routes for GIF animations */}
                    <Route path="/opposite-directional-gif" element={<OppositeDirectionalGif />} />
                    <Route path="/parallel-gif" element={<ParallelGif />} />
                    <Route path="/partition-gif" element={<PartitionGif />} />
                    <Route path="/same-directional-gif" element={<SameDirectionalGif />} />
                    <Route path="/sliding-window-gif" element={<SlidingWindowGif />} />

                    {/* Routes for Interactive Animations */}
                    <Route path="/cycle-detection-animation" element={<CycleDetectionAnimation />} />
                    <Route path="/longest-substring-animation" element={<LongestSubstringAnimation />} />
                    <Route path="/max-average-animation" element={<MaxAverageAnimation />} />
                    <Route path="/merge-sorted-animation" element={<MergeSortedAnimation />} />
                    <Route path="/sort-colors-animation" element={<SortColorsAnimation />} />
                    <Route path="/two-sum-animation" element={<TwoSumAnimation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
