import React from "react"
import BMI from "../components/Calculator/BMI"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import HomePage from "../components/HomePage"
import Layout from "../components/Layout/Layout"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <BMI />
      <HomePage />
    </Layout>
  )
}

export default Index
