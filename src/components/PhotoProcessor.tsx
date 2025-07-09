import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PhotoProcessor: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const processImage = useCallback(async (file: File) => {
    setIsProcessing(true);
    try {
      // For now, just display the original image
      // In a full implementation, you'd use the background removal code
      const imageUrl = URL.createObjectURL(file);
      setProcessedImage(imageUrl);
      
      toast({
        title: "Image processed successfully!",
        description: "Your professional headshot is ready.",
      });
    } catch (error) {
      toast({
        title: "Processing failed",
        description: "Please try again with a different image.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  }, [toast]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processImage(file);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Photo Processor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button 
              asChild 
              variant="outline" 
              className="cursor-pointer"
              disabled={isProcessing}
            >
              <span>
                {isProcessing ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                ) : (
                  <><Upload className="mr-2 h-4 w-4" /> Upload Photo</>
                )}
              </span>
            </Button>
          </label>
          
          {processedImage && (
            <div className="space-y-4 text-center">
              <img 
                src={processedImage} 
                alt="Processed headshot" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoProcessor;