"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Diamond, Globe, Headphones, Leaf, ShieldCheck, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="large"
        background="aurora"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Story",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ELEVATE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Elevate Your Everyday Experience"
      description="Discover premium craftsmanship meets innovative design. Experience the future of quality, today."
      buttons={[
        {
          text: "Explore Collections",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-adult-having-fun-white-party_23-2149429891.jpg"
      imageAlt="Minimalist premium lifestyle"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-portrait-with-blue-lights-visual-effects_23-2149419525.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man-suit_23-2149705918.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/unshaven-executive-black-white_1098-1182.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-freelancer-using-computer-plan-financial-analysis-with-business-charts-statistics-working-online-network-economy-growth-office-employee-planning-growth-strategy-close-up_482257-40931.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-girl-white-blazer-does-positive-pose_114579-15697.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join 10,000+ satisfied visionaries"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Sustainable Design",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Premium Materials",
          icon: Diamond,
        },
        {
          type: "text-icon",
          text: "Global Shipping",
          icon: Globe,
        },
        {
          type: "text-icon",
          text: "24/7 Support",
          icon: Headphones,
        },
        {
          type: "text-icon",
          text: "Lifetime Warranty",
          icon: ShieldCheck,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Crafting the Future of Quality"
      description="We believe that true innovation lies at the intersection of traditional artistry and cutting-edge material science."
      subdescription="Every detail is thoughtfully curated to provide an seamless experience that respects the heritage of craftsmanship."
      imageSrc="http://img.b2bpic.net/free-photo/man-is-making-pottery-potters-wheel-man-makes-pottery-clay-modeling_169016-67312.jpg"
      mediaAnimation="slide-up"
      icon={Sparkles}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Elite Essential",
          price: "$499",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-quartz-prism-with-dark-shadow-white-background_23-2147949079.jpg",
        },
        {
          id: "2",
          name: "Signature Tech",
          price: "$799",
          imageSrc: "http://img.b2bpic.net/free-photo/view-vacuum-cleaner-robot-flat-surface-floor_23-2151736854.jpg",
        },
        {
          id: "3",
          name: "Visionary Core",
          price: "$1,299",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-tech-device_23-2150722623.jpg",
        },
        {
          id: "4",
          name: "Modern Prism",
          price: "$349",
          imageSrc: "http://img.b2bpic.net/free-photo/shadow-strainer-with-organic-olives-white-background_23-2147853945.jpg",
        },
        {
          id: "5",
          name: "Seamless Arc",
          price: "$599",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-using-massage-gun_23-2149407519.jpg",
        },
        {
          id: "6",
          name: "Infinite Edge",
          price: "$899",
          imageSrc: "http://img.b2bpic.net/free-photo/crystal-balls-with-purple-background_23-2150439133.jpg",
        },
      ]}
      title="Featured Collections"
      description="Explore our latest range of premium tech-enhanced essentials designed for the modern lifestyle."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Chen",
          handle: "@sarahchen",
          testimonial: "An incredible level of design sophistication. I use these products daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-portrait-with-blue-lights-visual-effects_23-2149419525.jpg",
        },
        {
          id: "2",
          name: "James Wilson",
          handle: "@jwilson",
          testimonial: "The balance between function and form is simply unmatched globally.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man-suit_23-2149705918.jpg",
        },
        {
          id: "3",
          name: "Elena Rodriguez",
          handle: "@erodriguez",
          testimonial: "Finally, a brand that truly understands the needs of modern consumers.",
          imageSrc: "http://img.b2bpic.net/free-photo/unshaven-executive-black-white_1098-1182.jpg",
        },
        {
          id: "4",
          name: "Marcus Thorne",
          handle: "@mthorne",
          testimonial: "Stunning aesthetics, uncompromising quality. A true premium experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-freelancer-using-computer-plan-financial-analysis-with-business-charts-statistics-working-online-network-economy-growth-office-employee-planning-growth-strategy-close-up_482257-40931.jpg",
        },
        {
          id: "5",
          name: "Linda Wu",
          handle: "@lindawu",
          testimonial: "Every detail feels deliberate and perfect. Highly recommend to everyone.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-white-blazer-does-positive-pose_114579-15697.jpg",
        },
      ]}
      title="Voices of Excellence"
      description="Hear what our global community of enthusiasts has to say about the Elevate experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Connect With Us"
      description="Have questions or interested in professional partnerships? Our team is here to assist you."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ELEVATE"
      copyrightText="© 2025 ELEVATE | All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
