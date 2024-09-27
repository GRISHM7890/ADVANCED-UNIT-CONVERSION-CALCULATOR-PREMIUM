"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Thermometer, Weight, Ruler } from 'lucide-react'

export default function PremiumCalculator() {
  const [activeTab, setActiveTab] = useState("temperature")
  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("")
  const [kg, setKg] = useState("")
  const [pounds, setPounds] = useState("")
  const [km, setKm] = useState("")
  const [miles, setMiles] = useState("")

  const convertTemperature = () => {
    const c = parseFloat(celsius)
    if (!isNaN(c)) {
      setFahrenheit(((c * 9/5) + 32).toFixed(2))
    }
  }

  const convertWeight = () => {
    const k = parseFloat(kg)
    if (!isNaN(k)) {
      setPounds((k * 2.205).toFixed(2))
    }
  }

  const convertDistance = () => {
    const k = parseFloat(km)
    if (!isNaN(k)) {
      setMiles((k * 0.62137).toFixed(2))
    }
  }

  useEffect(() => {
    convertTemperature()
  }, [celsius])

  useEffect(() => {
    convertWeight()
  }, [kg])

  useEffect(() => {
    convertDistance()
  }, [km])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="temperature" className="data-[state=active]:bg-purple-100">
              <Thermometer className="w-5 h-5 mr-2" />
              Temperature
            </TabsTrigger>
            <TabsTrigger value="weight" className="data-[state=active]:bg-purple-100">
              <Weight className="w-5 h-5 mr-2" />
              Weight
            </TabsTrigger>
            <TabsTrigger value="distance" className="data-[state=active]:bg-purple-100">
              <Ruler className="w-5 h-5 mr-2" />
              Distance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="temperature" className="p-6">
            <h2 className="text-2xl font-bold mb-4">Celsius to Fahrenheit</h2>
            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Enter Celsius"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
              />
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-purple-500" />
              </div>
              <Input
                type="text"
                placeholder="Fahrenheit"
                value={fahrenheit}
                readOnly
              />
            </div>
          </TabsContent>
          <TabsContent value="weight" className="p-6">
            <h2 className="text-2xl font-bold mb-4">Kilograms to Pounds</h2>
            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Enter Kilograms"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
              />
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-purple-500" />
              </div>
              <Input
                type="text"
                placeholder="Pounds"
                value={pounds}
                readOnly
              />
            </div>
          </TabsContent>
          <TabsContent value="distance" className="p-6">
            <h2 className="text-2xl font-bold mb-4">Kilometers to Miles</h2>
            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Enter Kilometers"
                value={km}
                onChange={(e) => setKm(e.target.value)}
              />
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-purple-500" />
              </div>
              <Input
                type="text"
                placeholder="Miles"
                value={miles}
                readOnly
              />
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

