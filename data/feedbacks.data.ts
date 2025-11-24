export interface reviewsType {
  name: string;
  role: string;
  rating: number;
  message: string;
}
export interface feedbacksType {
  title: string;
  reviews: reviewsType[];
}

export const feedbacks = <feedbacksType>{
  title: "Client Testimonials",
  reviews: [
    {
      name: "Satish Patil",
      role: "Flat Saller - Pune",
      rating: 4.5,
      message:
        "AAKAR Infra Services guided us professionally throughout our flat resale. Clear communication and end-to-end support!",
    },
    {
      name: "Reshma Deshmukh",
      role: "Construction Client",
      rating: 5,
      message:
        "They executed our bungalow construction with quality, updates, and within deadline. Trustworthy firm!",
    },
    {
      name: "Anil Jagtap",
      role: "Loan & Legal",
      rating: 5,
      message:
        "They supported us from property legal to home loan approval. One-stop solution for buyers!",
    },
    {
      name: "Mahesh Rane",
      role: "Builder - Wakad",
      rating: 3.5,
      message:
        "Mandate sales handled very professionally. As a developer, I’m impressed with their marketing support.",
    },
    {
      name: "Shweta Kulkarni",
      role: "Interior Design",
      rating: 4,
      message:
        "From interiors to finishing, everything was handled by one team with perfection.",
    },
  ],
};
