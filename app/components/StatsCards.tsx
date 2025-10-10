import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { BookOpen, Flame, Archive } from "lucide-react";

const StatsCards = () => {
  return (
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Progress Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">49%</div>
          <p className="text-xs text-muted-foreground">95 of 192 cards</p>
        </CardContent>
      </Card>
       {/* Current Streak Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
          <Flame className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
          <p className="text-xs text-muted-foreground">days in a row</p>
        </CardContent>
      </Card>
       <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Decks</CardTitle>
          <Archive className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">learning sets</p>
        </CardContent>
      </Card>
        

    </div>
  )
}

export default StatsCards