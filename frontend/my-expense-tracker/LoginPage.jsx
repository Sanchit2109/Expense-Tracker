import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-6"
      >
        <Card className="rounded-2xl shadow-xl border-none">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-6">
              Welcome Back
            </h2>
            <form className="space-y-4">
              <Input type="email" placeholder="Email" className="rounded-xl" />
              <Input type="password" placeholder="Password" className="rounded-xl" />
              <Button className="w-full mt-4 rounded-xl bg-indigo-600 hover:bg-indigo-700">
                Log In
              </Button>
            </form>
            <p className="text-sm text-gray-600 text-center mt-4">
              Don’t have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
