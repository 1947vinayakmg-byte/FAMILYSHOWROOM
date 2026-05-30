import { Product, Coupon } from '../types';

// --- Banners / Men's Images ---
import formalImg from '../../assets/mens/formal.jpg';
import jeans1Img from '../../assets/mens/jeans-1.jpeg';
import jeans2Img from '../../assets/mens/jeans-2.jpg';
import jeans3Img from '../../assets/mens/jeans-3.jpg';
import shirt1Img from '../../assets/mens/shert-1.jpg';
import shirt2Img from '../../assets/mens/shert-2.jpg';
import shirt3Img from '../../assets/mens/shirt-3.jpg';
import tshirt1Img from '../../assets/mens/t-shert-1.jpg';
import tshirt2Img from '../../assets/mens/t-shert-2.jpg';
import tshirt3Img from '../../assets/mens/t-shert-3.jpg';

// --- Women's Images ---
import womenModern from '../../assets/women/modern.jpg';
import womenSaree1 from '../../assets/women/saree-1.jpg';
import womenSaree2 from '../../assets/women/saree-2.jpg';
import womenSaree3 from '../../assets/women/saree-3.jpg';
import womenSaree4 from '../../assets/women/saree-4.jpg';
import womenSaree5 from '../../assets/women/saree-5.jpg';
import womenSaree from '../../assets/women/saree.jpg';

// --- Kids' Images ---
import kids1 from '../../assets/kids/kids-1.jpg';
import kids2 from '../../assets/kids/kids-2.jpg';
import kids3 from '../../assets/kids/kids-3.jpg';
import kids4 from '../../assets/kids/kids-4.jpg';
import kids5 from '../../assets/kids/kids-5.jpg';

// --- Sherwanis ---
import sherwani1 from '../../assets/sherwanis/groomsherwani.jpg';
import sherwani2 from '../../assets/sherwanis/sherwani-2.jpg';
import sherwani3 from '../../assets/sherwanis/sherwani-3.jpg';
import sherwani4 from '../../assets/sherwanis/sherwani-4.jpg';
import sherwani5 from '../../assets/sherwanis/sherwani-5.jpg';
import sherwani6 from '../../assets/sherwanis/sherwani-6.jpg';

// --- Lehengas ---
import lehenga3 from '../../assets/lehengas/lehenga-3.jpg';
import lehenga4 from '../../assets/lehengas/lehenga-4.jpg';
import lehenga1 from '../../assets/lehengas/lehengas-1.jpg';
import lehenga2 from '../../assets/lehengas/lehengas-2.jpg';
import lehenga5 from '../../assets/lehengas/lehengas-5.jpg';
import lehenga6 from '../../assets/lehengas/lehengas-6.jpg';

export const EXCLUSIVE_PRODUCTS: Product[] = [
  // ==========================================
  // MEN'S PRODUCTS
  // ==========================================
  {
    id: 'men_formal_suit',
    name: 'Classic Royal Silk Bandhgala',
    category: 'men',
    subcategory: 'Formalwear',
    price: 12499,
    originalPrice: 15999,
    description: 'A masterpiece of classic tailoring. This Bandhgala jacket is crafted from pure Banarasi silk, featuring structured shoulder pads, hand-carved gold brass buttons, and a luxurious satin lining. Ideal for formal heritage gatherings and high-society soirées.',
    images: [formalImg],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'CUSTOM'],
    colors: [
      { name: 'Royal Onyx', hex: '#111111' },
      { name: 'Imperial Gold', hex: '#D4AF37' },
      { name: 'Midnight Blue', hex: '#0B1D3A' }
    ],
    rating: 4.9,
    reviewsCount: 14,
    fabric: 'Pure Banarasi Silk & Satin Lining',
    work: 'Zardozi collar trim and gold brass buttons',
    care: 'Dry clean only. Store in a muslin bag away from direct sunlight.',
    stock: 5,
    reviews: [
      {
        id: 'rev_formal_1',
        author: 'Arjun Mehta',
        rating: 5,
        comment: 'Absolutely stunning fit. The custom sizing was tailored to perfection, and the silk has an incredible premium weight.',
        date: '2026-05-12'
      },
      {
        id: 'rev_formal_2',
        author: 'Vikram Seth',
        rating: 4,
        comment: 'Very premium jacket. The gold buttons add a perfect royal touch. Delivery was prompt and came with white-glove packaging.',
        date: '2026-05-20'
      }
    ]
  },
  {
    id: 'men_jeans_1',
    name: 'Indigo Slim-Fit Premium Denim',
    category: 'men',
    subcategory: 'Denim',
    price: 3499,
    originalPrice: 4999,
    description: 'Woven from premium Japanese selvedge denim, these indigo jeans offer a clean, sophisticated slim profile. The fabric features a slight stretch for comfort, combined with deep indigo dyes that wear and fade beautifully over time.',
    images: [jeans1Img],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Deep Indigo', hex: '#1C3144' },
      { name: 'Classic Blue', hex: '#415A77' }
    ],
    rating: 4.7,
    reviewsCount: 22,
    fabric: '13oz Japanese Selvedge Cotton-Stretch Denim',
    work: 'Reinforced chain stitching and copper rivets',
    care: 'Wash inside out in cold water. Air dry to maintain dye richness.',
    stock: 12,
    reviews: [
      {
        id: 'rev_jeans1_1',
        author: 'Rohan Sharma',
        rating: 5,
        comment: 'Best denim I have purchased. Fits like a glove and the indigo dye has a rich depth to it.',
        date: '2026-04-18'
      },
      {
        id: 'rev_jeans1_2',
        author: 'Kabir Dev',
        rating: 4,
        comment: 'Great quality, premium feel. It is a bit stiff at first, but softens up nicely after a couple of wears.',
        date: '2026-05-02'
      }
    ]
  },
  {
    id: 'men_jeans_2',
    name: 'Onyx Tailored Stretch Jeans',
    category: 'men',
    subcategory: 'Denim',
    price: 3899,
    originalPrice: 5499,
    description: 'Engineered for the modern gentleman. These jet-black tailored jeans combine a sleek, clean silhouette with high-performance stretch. Finished with tonal matte hardware for a minimal, sophisticated urban aesthetic.',
    images: [jeans2Img],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Jet Black', hex: '#0A0A0A' },
      { name: 'Coal Grey', hex: '#2B2B2B' }
    ],
    rating: 4.8,
    reviewsCount: 18,
    fabric: 'Premium Cotton-Polyester-Elastane Blend',
    work: 'Tonal black stitching and branded matte black hardware',
    care: 'Machine wash cold on gentle cycle. Do not bleach.',
    stock: 9,
    reviews: [
      {
        id: 'rev_jeans2_1',
        author: 'Siddharth R.',
        rating: 5,
        comment: 'The stretch on these is incredible. Extremely comfortable for long travel days, and they look smart enough for semi-formal dinners.',
        date: '2026-05-05'
      }
    ]
  },
  {
    id: 'men_jeans_3',
    name: 'Vanguard Distressed Selvedge Jeans',
    category: 'men',
    subcategory: 'Denim',
    price: 4299,
    originalPrice: 5999,
    description: 'A rugged yet refined addition to your wardrobe. These jeans are carefully distressed by hand to mimic years of natural wear. Crafted from heavy-duty organic denim, they feature soft wash textures and subtle abrasions.',
    images: [jeans3Img],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Light Wash Blue', hex: '#A4C3D2' },
      { name: 'Vintage Stone', hex: '#C2C5BB' }
    ],
    rating: 4.6,
    reviewsCount: 15,
    fabric: '100% Organic Selvedge Cotton Denim',
    work: 'Hand-distressed abrasions and vintage wash finish',
    care: 'Wash sparingly. Line dry in shade to preserve distressed features.',
    stock: 8,
    reviews: [
      {
        id: 'rev_jeans3_1',
        author: 'Aditya Sen',
        rating: 5,
        comment: 'Superb casual look. The distressing looks very natural and not overdone. High-grade construction.',
        date: '2026-04-29'
      }
    ]
  },
  {
    id: 'men_shirt_1',
    name: 'Traditional Festive Gold Kurta-Shirt',
    category: 'men',
    subcategory: 'Luxury Shirts',
    price: 4999,
    originalPrice: 6999,
    description: 'Perfect for intimate family ceremonies and festive celebrations. This kurta-style shirt is tailored from a premium linen-silk blend, boasting a subtle golden luster, mandarin collar, and delicate self-textured woven details.',
    images: [shirt1Img],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'CUSTOM'],
    colors: [
      { name: 'Marigold Gold', hex: '#E5A93B' },
      { name: 'Ivory Cream', hex: '#FDFBF7' }
    ],
    rating: 4.8,
    reviewsCount: 30,
    fabric: '60% Fine Linen & 40% Mulberry Silk',
    work: 'Intricate self-weave patterns and pearl-finish buttons',
    care: 'Dry clean recommended. Alternately, gentle hand wash with mild detergent.',
    stock: 15,
    reviews: [
      {
        id: 'rev_shirt1_1',
        author: 'Gaurav K.',
        rating: 5,
        comment: 'Wore this for a haldi ceremony and received endless compliments. The fabric breathes beautifully and looks extremely premium.',
        date: '2026-05-15'
      }
    ]
  },
  {
    id: 'men_shirt_2',
    name: 'Classic Royal Emerald Silk Shirt',
    category: 'men',
    subcategory: 'Luxury Shirts',
    price: 5499,
    originalPrice: 7499,
    description: 'An statement piece designed to turn heads. Tailored in a modern relaxed fit from premium slub silk, this shirt features a rich deep emerald shade, structural cuffs, and a resort-style collar for an effortless luxury feel.',
    images: [shirt2Img],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'CUSTOM'],
    colors: [
      { name: 'Emerald Green', hex: '#0F52BA' },
      { name: 'Ruby Wine', hex: '#722F37' }
    ],
    rating: 4.9,
    reviewsCount: 11,
    fabric: '100% Slub Raw Silk',
    work: 'Seamless hidden button placket and luxury single-needle tailoring',
    care: 'Dry clean only. Warm iron inside out.',
    stock: 7,
    reviews: [
      {
        id: 'rev_shirt2_1',
        author: 'Ranveer S.',
        rating: 5,
        comment: 'Exquisite color! The raw silk texture gives it a wonderful luxury look that pairs beautifully with off-white trousers.',
        date: '2026-05-18'
      }
    ]
  },
  {
    id: 'men_shirt_3',
    name: 'Sartorial Ivory Linen Casual Shirt',
    category: 'men',
    subcategory: 'Luxury Shirts',
    price: 3299,
    originalPrice: 4499,
    description: 'The epitome of relaxed summer luxury. Woven from 100% organic Italian flax, this casual ivory shirt has a natural slub texture that feels cool and crisp against the skin. Features a classic button-down collar and chest patch pocket.',
    images: [shirt3Img],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Ivory White', hex: '#FFFFFA' },
      { name: 'Sky Blue', hex: '#C5D3E8' },
      { name: 'Sand Beige', hex: '#E6D7C3' }
    ],
    rating: 4.5,
    reviewsCount: 25,
    fabric: '100% Organic Italian Flax Linen',
    work: 'Classic horn-effect buttons and neat flat-felled seams',
    care: 'Machine wash warm, tumble dry low. Iron while slightly damp for a crisp look.',
    stock: 20,
    reviews: [
      {
        id: 'rev_shirt3_1',
        author: 'Sameer V.',
        rating: 4,
        comment: 'Extremely light and perfect for hot days. It creases naturally as quality linen does, which adds to the casual look.',
        date: '2026-05-24'
      }
    ]
  },
  {
    id: 'men_tshirt_1',
    name: 'Bespoke Pima Henley Tee',
    category: 'men',
    subcategory: 'Designer Tees',
    price: 2499,
    originalPrice: 3499,
    description: 'Upgrade your off-duty attire. Crafted from ultra-soft, long-staple Peruvian Pima cotton, this henley features a three-button placket, structured rib cuffs, and a contoured fit that maintains its shape after washing.',
    images: [tshirt1Img],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#E5E0DB' },
      { name: 'Navy Blue', hex: '#1B2A4A' }
    ],
    rating: 4.7,
    reviewsCount: 19,
    fabric: '100% Long-Staple Peruvian Pima Cotton',
    work: 'Ribbed knit cuffs and genuine mother-of-pearl buttons',
    care: 'Machine wash cold with like colors. Flat dry to preserve shape.',
    stock: 14,
    reviews: [
      {
        id: 'rev_tshirt1_1',
        author: 'Nikhil P.',
        rating: 5,
        comment: 'Unbelievably soft material. The fit around the chest and arms is spot on. Worth every rupee.',
        date: '2026-04-30'
      }
    ]
  },
  {
    id: 'men_tshirt_2',
    name: 'Signature Crimson Polo Tee',
    category: 'men',
    subcategory: 'Designer Tees',
    price: 2899,
    originalPrice: 3999,
    description: 'A classic sport-luxury icon. Knit from double-mercerized Egyptian cotton pique, this crimson polo has an exquisite sheen, durable structure, and a smart knit collar. Subtle brand crest embroidered at the chest in gold thread.',
    images: [tshirt2Img],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Crimson Red', hex: '#9E1B32' },
      { name: 'Forest Green', hex: '#1B4D3E' }
    ],
    rating: 4.8,
    reviewsCount: 16,
    fabric: '100% Double-Mercerized Egyptian Cotton Pique',
    work: 'Rib-knit collar and gold embroidery thread crest detail',
    care: 'Wash cold inside out. Reshape while damp and iron on medium.',
    stock: 18,
    reviews: [
      {
        id: 'rev_tshirt2_1',
        author: 'Kunal Sen',
        rating: 5,
        comment: 'Superior quality polo. The collar doesn’t roll or lose shape, and the crimson color is deep and royal.',
        date: '2026-05-11'
      }
    ]
  },
  {
    id: 'men_tshirt_3',
    name: 'Avenue Crewneck Casual Knit Tee',
    category: 'men',
    subcategory: 'Designer Tees',
    price: 1999,
    originalPrice: 2799,
    description: 'The foundation of everyday styling. Made from an organic cotton-bamboo jersey blend, this crewneck is lightweight, naturally moisture-wicking, and features a luxuriously smooth drape. Finished with a blind-stitched hem.',
    images: [tshirt3Img],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Stone Grey', hex: '#8E9094' },
      { name: 'Midnight Black', hex: '#0D0E10' }
    ],
    rating: 4.6,
    reviewsCount: 28,
    fabric: '70% Organic Cotton & 30% Bamboo Viscose',
    work: 'Interlock knit seam construction and blind-stitched collar ribbon',
    care: 'Machine wash cold, tumble dry low. Warm iron if needed.',
    stock: 25,
    reviews: [
      {
        id: 'rev_tshirt3_1',
        author: 'Varun D.',
        rating: 5,
        comment: 'Very comfortable and breathable. The bamboo blend makes a huge difference in hot weather.',
        date: '2026-05-22'
      }
    ]
  },

  // ==========================================
  // WOMEN'S PRODUCTS (saree-1 to 5, modern, saree)
  // ==========================================
  {
    id: 'women_modern_suit',
    name: 'Atelier Ivory Velvet Trouser Suit',
    category: 'women',
    subcategory: 'Modern Couture',
    price: 14499,
    originalPrice: 18999,
    description: 'A structural, ivory velvet double-breasted trouser suit, featuring fine silk lapels and tailored pants. Handcrafted for modern women of elegance.',
    images: [womenModern],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'CUSTOM'],
    colors: [
      { name: 'Alabaster Ivory', hex: '#FDFBF7' },
      { name: 'Noir Black', hex: '#121212' }
    ],
    rating: 4.9,
    reviewsCount: 8,
    fabric: 'Premium Italian Silk-Velvet Blend',
    work: 'Structured shoulders and silk-satin lapel trims',
    care: 'Dry clean only. Store in a garment protector bag.',
    stock: 6,
    reviews: [
      {
        id: 'rev_w_mod_1',
        author: 'Meera Rajput',
        rating: 5,
        comment: 'Stunning structure! The pants fall beautifully and the velvet is incredibly soft and rich.',
        date: '2026-05-02'
      }
    ]
  },
  {
    id: 'women_saree_1',
    name: 'Kanjeevaram Gold Temple Weave Saree',
    category: 'women',
    subcategory: 'Cocktail Sarees',
    price: 18499,
    originalPrice: 24999,
    description: 'Woven with real silver-dipped gold zari threads, this Kanjeevaram silk saree features traditional temple borders and recursive floral pallu patterns. A heritage drape of unmatched nobility.',
    images: [womenSaree1],
    sizes: ['S', 'M', 'L', 'CUSTOM'],
    colors: [
      { name: 'Sovereign Gold', hex: '#D4AF37' },
      { name: 'Crimson Red', hex: '#9E1B32' }
    ],
    rating: 4.9,
    reviewsCount: 16,
    fabric: '100% Pure Kanchipuram Mulberry Silk',
    work: 'Hand-woven gold zari threads and traditional pallu weave',
    care: 'Dry clean only. Roll fold occasionally to prevent creases.',
    stock: 4,
    reviews: [
      {
        id: 'rev_w_s1_1',
        author: 'Deepika S.',
        rating: 5,
        comment: 'This saree is a literal treasure. The gold thread work shines elegantly, and the silk drape is extremely smooth.',
        date: '2026-05-14'
      }
    ]
  },
  {
    id: 'women_saree_2',
    name: 'Emerald Scalloped Organza Saree',
    category: 'women',
    subcategory: 'Cocktail Sarees',
    price: 9499,
    originalPrice: 12999,
    description: 'Delicate organza saree in a deep emerald shade, finished with hand-embellished cut-work scalloped borders and shimmering sequins. Perfect for cocktail receptions and evening gatherings.',
    images: [womenSaree2],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Emerald Green', hex: '#0F52BA' },
      { name: 'Blush Pink', hex: '#FFB6C1' }
    ],
    rating: 4.7,
    reviewsCount: 12,
    fabric: 'Semi-Sheer Premium Silk Organza',
    work: 'Cut-work scalloped borders and silver sequins detailing',
    care: 'Dry clean only. Iron on low heat using a protective cloth barrier.',
    stock: 9,
    reviews: [
      {
        id: 'rev_w_s2_1',
        author: 'Anjali Sharma',
        rating: 5,
        comment: 'Extremely lightweight and easy to carry. The scalloped edges give it a very modern yet classic look.',
        date: '2026-05-19'
      }
    ]
  },
  {
    id: 'women_saree_3',
    name: 'Midnight Bloom Hand-Painted Saree',
    category: 'women',
    subcategory: 'Cocktail Sarees',
    price: 11299,
    originalPrice: 14999,
    description: 'Featuring hand-painted floral bouquets on a fluid midnight blue satin-crepe base, this saree is framed with delicate hand-stitched beads. A poetic canvas drape.',
    images: [womenSaree3],
    sizes: ['S', 'M', 'L', 'CUSTOM'],
    colors: [
      { name: 'Midnight Navy', hex: '#0F1A34' },
      { name: 'Plum Purple', hex: '#4B0082' }
    ],
    rating: 4.8,
    reviewsCount: 10,
    fabric: 'Fluid Satin Crepe',
    work: 'Hand-painted floral work and beaded borders',
    care: 'Dry clean only. Store flat.',
    stock: 7,
    reviews: [
      {
        id: 'rev_w_s3_1',
        author: 'Pooja Nair',
        rating: 4,
        comment: 'The colors in the flowers are very vibrant. The fabric has a gorgeous sheen that moves beautifully.',
        date: '2026-05-22'
      }
    ]
  },
  {
    id: 'women_saree_4',
    name: 'Blossom Pink Chanderi Saree',
    category: 'women',
    subcategory: 'Cocktail Sarees',
    price: 7999,
    originalPrice: 10999,
    description: 'An elegant baby-pink Chanderi silk saree, displaying fine zari booti weaves and finished with a golden border. Ideal for summer lunches and traditional daytime affairs.',
    images: [womenSaree4],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Blossom Pink', hex: '#FFB6C1' },
      { name: 'Ivory Gold', hex: '#ECE8DB' }
    ],
    rating: 4.6,
    reviewsCount: 20,
    fabric: 'Authentic Chanderi Silk-Cotton Blend',
    work: 'Hand-woven zari booti and antique gold tissue border',
    care: 'Gentle dry clean only.',
    stock: 14,
    reviews: [
      {
        id: 'rev_w_s4_1',
        author: 'Kriti Deshmukh',
        rating: 5,
        comment: 'Soft, light, and very elegant. The baby pink is very soothing and the Chanderi texture is flawless.',
        date: '2026-05-10'
      }
    ]
  },
  {
    id: 'women_saree_5',
    name: 'Royal Sapphire Silk Georgette Saree',
    category: 'women',
    subcategory: 'Cocktail Sarees',
    price: 13899,
    originalPrice: 17999,
    description: 'Tailored from fluid silk georgette in deep sapphire, this saree features an elaborate hand-done border of Gota Patti and Zardosi embroidery. Complemented by a matching unstitched silk blouse piece.',
    images: [womenSaree5],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Sapphire Blue', hex: '#0F2C59' },
      { name: 'Onyx Black', hex: '#111111' }
    ],
    rating: 4.9,
    reviewsCount: 15,
    fabric: 'Premium Pure Silk Georgette',
    work: 'Handmade Gota Patti and resham thread embroidery border',
    care: 'Dry clean only. Wrap in non-acidic tissue papers to protect the metal threadwork.',
    stock: 8,
    reviews: [
      {
        id: 'rev_w_s5_1',
        author: 'Priyanka Sen',
        rating: 5,
        comment: 'Heavy Gota work, looks extremely opulent. The georgette is high quality and drapes like a dream.',
        date: '2026-05-24'
      }
    ]
  },
  {
    id: 'women_saree_classic',
    name: 'Crimson Heritage Silk Saree',
    category: 'women',
    subcategory: 'Cocktail Sarees',
    price: 15999,
    originalPrice: 21999,
    description: 'Classic crimson red Benarasi silk saree featuring heavy floral creepers (Bel) hand-woven all over the body, completed with an antique gold border. Perfect for bridal ceremonies.',
    images: [womenSaree],
    sizes: ['S', 'M', 'L', 'CUSTOM'],
    colors: [
      { name: 'Heritage Crimson', hex: '#9E1B32' },
      { name: 'Coral Red', hex: '#E2583E' }
    ],
    rating: 5.0,
    reviewsCount: 19,
    fabric: '100% Pure Banarasi Katan Silk',
    work: 'Hand-woven antique gold zari creepers pattern',
    care: 'Dry clean only. Professional steam pressing suggested.',
    stock: 5,
    reviews: [
      {
        id: 'rev_w_sc_1',
        author: 'Aishwarya V.',
        rating: 5,
        comment: 'A true heirloom. Wore it for my reception and it felt incredibly regal. Highly recommended!',
        date: '2026-05-27'
      }
    ]
  },

  // ==========================================
  // KIDS' PRODUCTS (kids-1 to 5)
  // ==========================================
  {
    id: 'kids_leh_1',
    name: 'Lil Princess Silk Pavada Set',
    category: 'kids',
    subcategory: 'Kids Couture',
    price: 3999,
    originalPrice: 5499,
    description: 'Made from pure silk with soft satin lining underneath, this pavada set features golden temple borders. Non-itchy seams ensure hours of comfort for little girls.',
    images: [kids1],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y', 'CUSTOM'],
    colors: [
      { name: 'Fuchsia Pink', hex: '#D21F3C' },
      { name: 'Turquoise Blue', hex: '#40E0D0' }
    ],
    rating: 4.8,
    reviewsCount: 9,
    fabric: 'Soft South Silk & Non-itchy Satin Innerlining',
    work: 'South Indian golden temple border and soft brocade top',
    care: 'Gentle hand wash inside out. Line dry.',
    stock: 10,
    reviews: [
      {
        id: 'rev_k1_1',
        author: 'Radhika M.',
        rating: 5,
        comment: 'My daughter looked so lovely in this. The inner lining is very soft, she didn’t complain once about itching!',
        date: '2026-04-22'
      }
    ]
  },
  {
    id: 'kids_sher_2',
    name: 'Prince Brocade Sherwani Set',
    category: 'kids',
    subcategory: 'Kids Couture',
    price: 4599,
    originalPrice: 5999,
    description: 'A traditional brocade sherwani for boys, featuring structured shoulders and matching cotton churidar pants. Complete with hand-stitched faux gold buttons.',
    images: [kids2],
    sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y', 'CUSTOM'],
    colors: [
      { name: 'Ivory Gold', hex: '#ECE8DB' },
      { name: 'Royal Blue', hex: '#0B2265' }
    ],
    rating: 4.7,
    reviewsCount: 14,
    fabric: 'Benarasi Cotton-Brocade & Premium Muslin lining',
    work: 'Tonal self-brocade motifs and gold-coated buttons',
    care: 'Dry clean recommended. Low iron on reverse.',
    stock: 8,
    reviews: [
      {
        id: 'rev_k2_1',
        author: 'Nitin J.',
        rating: 4,
        comment: 'Excellent fit for my 6-year-old. The fabric is sturdy yet soft on the inside.',
        date: '2026-05-09'
      }
    ]
  },
  {
    id: 'kids_leh_3',
    name: 'Heirloom Brocade Choli Set',
    category: 'kids',
    subcategory: 'Kids Couture',
    price: 4299,
    originalPrice: 5799,
    description: 'Gold-brocade choli with a voluminous pleated silk skirt, lined with soft muslin. Comes with a lightweight net dupatta finished with golden borders.',
    images: [kids3],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', 'CUSTOM'],
    colors: [
      { name: 'Marigold Yellow', hex: '#FFC000' },
      { name: 'Coral Rose', hex: '#F08080' }
    ],
    rating: 4.9,
    reviewsCount: 7,
    fabric: 'Fine Cotton-Silk Brocade & Soft Muslin Skirt',
    work: 'Gold zari booti motifs and gold-laced dupatta borders',
    care: 'Dry clean only.',
    stock: 12,
    reviews: [
      {
        id: 'rev_k3_1',
        author: 'Sushma R.',
        rating: 5,
        comment: 'Simply outstanding. The color is bright, fabric quality is amazing, and it fits perfectly.',
        date: '2026-05-18'
      }
    ]
  },
  {
    id: 'kids_suit_4',
    name: 'Lil Nawab Velvet Bandhgala',
    category: 'kids',
    subcategory: 'Kids Couture',
    price: 4999,
    originalPrice: 6999,
    description: 'Add a touch of royalty to your young gentleman’s look. This dark velvet bandhgala jacket features an embroidered mandarin collar and elegant brass buttons.',
    images: [kids4],
    sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y', 'CUSTOM'],
    colors: [
      { name: 'Velvet Midnight', hex: '#0A1128' },
      { name: 'Burgundy Wine', hex: '#58111A' }
    ],
    rating: 4.8,
    reviewsCount: 11,
    fabric: 'Rich Italian Silk-Cotton Velvet',
    work: 'Mandarin collar thread embroidery and polished brass buttons',
    care: 'Dry clean only. Steam iron only.',
    stock: 5,
    reviews: [
      {
        id: 'rev_k4_1',
        author: 'Harish T.',
        rating: 5,
        comment: 'High quality velvet. Looks super rich and fits my 8-year-old son perfectly. Ideal for weddings.',
        date: '2026-05-14'
      }
    ]
  },
  {
    id: 'kids_leh_5',
    name: 'Blossom Organza Kids Lehenga',
    category: 'kids',
    subcategory: 'Kids Couture',
    price: 3699,
    originalPrice: 4999,
    description: 'Featuring floral organza prints, this lightweight kids lehenga comes with a soft cotton blouse and net dupatta, decorated with tiny pearl beads.',
    images: [kids5],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y', 'CUSTOM'],
    colors: [
      { name: 'Peach Pink', hex: '#FFDAB9' },
      { name: 'Mint Green', hex: '#98FF98' }
    ],
    rating: 4.5,
    reviewsCount: 13,
    fabric: 'Lightweight Silk Organza & Organic Cotton lining',
    work: 'Floral digital-print overlays with hand-embroidered pearl boundaries',
    care: 'Gentle hand wash in cold water. Air dry.',
    stock: 15,
    reviews: [
      {
        id: 'rev_k5_1',
        author: 'Anupama G.',
        rating: 4,
        comment: 'Beautiful design. It is very airy and my daughter was able to run and play around without any discomfort.',
        date: '2026-05-23'
      }
    ]
  },

  // ==========================================
  // SHERWANIS (groomsherwani, sherwani-2 to 6)
  // Category is 'wedding', Subcategory is 'Groom Sherwanis'
  // ==========================================
  {
    id: 'sherwani_01',
    name: 'The Emperor 24K Gold Zari Sherwani',
    category: 'men',
    subcategory: 'Groom Sherwanis',
    price: 24999,
    originalPrice: 32999,
    description: 'Draped in hand-loomed gold Banarasi silk, woven with real 24k gold metallic threads, showcasing imperial Mughal floral resham, and closed with hand-carved solid gold-gilded buttons. Hand-embroidered over 480 hours.',
    images: [sherwani1],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'CUSTOM'],
    colors: [
      { name: 'Emperor Gold', hex: '#D4AF37' },
      { name: 'Ivory Cream', hex: '#FAF5EC' }
    ],
    rating: 5.0,
    reviewsCount: 24,
    fabric: '100% Pure Banarasi Silk & Real Gold Zari threads',
    work: '480 hours of hand-done Zardozi embroidery with gold-gilded brass buttons',
    care: 'Dry clean only. Wrap in acid-free tissue paper inside a cedar wood chest.',
    stock: 3,
    reviews: [
      {
        id: 'rev_s1_1',
        author: 'Yuvraj Singh',
        rating: 5,
        comment: 'This is the crown jewel of my wedding. The hand embroidery is majestic. Master tailoring fits down to the millimeter.',
        date: '2026-05-01'
      }
    ]
  },
  {
    id: 'sherwani_02',
    name: 'Maharaja Royal Brocade Achkan-Sherwani',
    category: 'men',
    subcategory: 'Groom Sherwanis',
    price: 19499,
    originalPrice: 25999,
    description: 'An opulent ivory-cream hand-loomed Banarasi brocade achkan style sherwani, displaying intricate floral vine motifs and adorned with authentic royal Kundan buttons.',
    images: [sherwani2],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Ivory Cream', hex: '#FAF5EC' },
      { name: 'Imperial Sand', hex: '#D2C4B1' }
    ],
    rating: 4.9,
    reviewsCount: 15,
    fabric: 'Authentic Hand-loomed Banarasi Brocade Silk',
    work: 'Allover woven floral vines and hand-crafted Kundan buttons closure',
    care: 'Dry clean only. Do not fold tightly.',
    stock: 4,
    reviews: [
      {
        id: 'rev_s2_1',
        author: 'Randeep H.',
        rating: 5,
        comment: 'Exceptional weave quality. The Kundan buttons look extremely rich and the fabric has a beautiful structural weight.',
        date: '2026-05-10'
      }
    ]
  },
  {
    id: 'sherwani_03',
    name: 'Monarch Emerald Resham Sherwani',
    category: 'men',
    subcategory: 'Groom Sherwanis',
    price: 21999,
    originalPrice: 28999,
    description: 'Crafted from raw silk in a deep imperial emerald, this sherwani is decorated with tone-on-tone resham embroidery on the collar, sleeve cuffs, and back frame. Comes with a raw silk churidar.',
    images: [sherwani3],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'CUSTOM'],
    colors: [
      { name: 'Emerald Green', hex: '#0F4D32' },
      { name: 'Midnight Navy', hex: '#0A1128' }
    ],
    rating: 4.8,
    reviewsCount: 11,
    fabric: 'Pure Raw Silk with Satin Innerlining',
    work: 'Tone-on-tone resham thread embroidery and matching silk-bound buttons',
    care: 'Dry clean only. Store on a contoured hanger.',
    stock: 5,
    reviews: [
      {
        id: 'rev_s3_1',
        author: 'Amitabh B.',
        rating: 5,
        comment: 'Very unique color. The resham embroidery is subtle yet extremely detailed. Highly satisfied.',
        date: '2026-05-15'
      }
    ]
  },
  {
    id: 'sherwani_04',
    name: 'Classic Ivory Zardozi Groom Sherwani',
    category: 'men',
    subcategory: 'Groom Sherwanis',
    price: 18499,
    originalPrice: 24999,
    description: 'Classic off-white wedding sherwani crafted from structured silk-cotton fabric. Highlighted with elegant silver-tone zardozi embroidery framing the collar, buttons placket, and sleeve borders.',
    images: [sherwani4],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Ivory White', hex: '#FFFFFA' },
      { name: 'Silver Champagne', hex: '#E5DCD3' }
    ],
    rating: 4.7,
    reviewsCount: 18,
    fabric: 'Structured Silk-Cotton Blend',
    work: 'Silver metal thread zardozi and bead-work borders',
    care: 'Dry clean only. Protect from moisture.',
    stock: 6,
    reviews: [
      {
        id: 'rev_s4_1',
        author: 'Varun Dhawan',
        rating: 4,
        comment: 'Classic and classy. Fits very well, and the silver zardozi borders look brilliant under the lights.',
        date: '2026-05-18'
      }
    ]
  },
  {
    id: 'sherwani_05',
    name: 'Ruby Floral Velvet Sherwani',
    category: 'men',
    subcategory: 'Groom Sherwanis',
    price: 23999,
    originalPrice: 31999,
    description: 'An opulent, deep ruby velvet sherwani featuring intricate gold bullion embroidered floral patterns along the sleeves and collar. Designed for winter palace weddings.',
    images: [sherwani5],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Ruby Wine', hex: '#58111A' },
      { name: 'Onyx Velvet', hex: '#111111' }
    ],
    rating: 4.9,
    reviewsCount: 13,
    fabric: 'Royal Italian Cotton-Silk Velvet',
    work: 'Hand-done gold bullion thread and seed-pearl framing',
    care: 'Dry clean only. Steam or press inside out only with a thick cloth layer.',
    stock: 4,
    reviews: [
      {
        id: 'rev_s5_1',
        author: 'Saif Ali',
        rating: 5,
        comment: 'The velvet quality is top-notch. Bullion work has an antique gold look which makes it look centuries old.',
        date: '2026-05-20'
      }
    ]
  },
  {
    id: 'sherwani_06',
    name: 'Avenue Contemporary Pastel Sherwani',
    category: 'men',
    subcategory: 'Groom Sherwanis',
    price: 15499,
    originalPrice: 20999,
    description: 'Designed for modern day-wedding ceremonies, this light pastel pink sherwani features self-textured thread embroidery, an asymmetric wrap front, and clean contemporary tailoring.',
    images: [sherwani6],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pastel Rose', hex: '#FADADD' },
      { name: 'Mint Ivory', hex: '#F5FFFA' }
    ],
    rating: 4.6,
    reviewsCount: 10,
    fabric: 'Premium Georgette-Silk with Muslin base lining',
    work: 'Self-colored micro-thread stitches and asymmetrical metallic buttons closure',
    care: 'Dry clean only.',
    stock: 7,
    reviews: [
      {
        id: 'rev_s6_1',
        author: 'Ranbir K.',
        rating: 4,
        comment: 'Very modern design. It is relatively lightweight compared to heavy brocade sherwanis, making it very comfortable to wear for long rituals.',
        date: '2026-05-25'
      }
    ]
  },

  // ==========================================
  // LEHENGAS (lehenga-3, lehenga-4, lehengas-1, 2, 5, 6)
  // Category is 'wedding', Subcategory is 'Bridal Lehengas'
  // ==========================================
  {
    id: 'lehenga_01',
    name: 'Royal Heritage Zardozi Lehenga',
    category: 'wedding',
    subcategory: 'Bridal Lehengas',
    price: 27999,
    originalPrice: 35999,
    description: 'An heirloom-quality crimson velvet lehenga skirt, featuring hand-drawn zardozi metallic dabkas and dual scalloped border dupattas. Worn with a raw silk hand-worked choli.',
    images: [lehenga1],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Heritage Crimson', hex: '#9E1B32' },
      { name: 'Rosewood Magenta', hex: '#651C32' }
    ],
    rating: 5.0,
    reviewsCount: 22,
    fabric: 'Pure Velvet Lehenga & Raw Silk Blouse, Organza Dupattas',
    work: 'Zardozi metal spring coils, gold dabka, and pearl borders',
    care: 'Dry clean only. Store flat in a fabric trunk away from direct moisture.',
    stock: 2,
    reviews: [
      {
        id: 'rev_l1_1',
        author: 'Anushka S.',
        rating: 5,
        comment: 'The zardozi work is incredibly dense and heavy. The crimson shade is the exact traditional bridal red. Outstanding!',
        date: '2026-05-04'
      }
    ]
  },
  {
    id: 'lehenga_02',
    name: 'Kundan Embellished Velvet Lehenga',
    category: 'wedding',
    subcategory: 'Bridal Lehengas',
    price: 28999,
    originalPrice: 37999,
    description: 'Opulent burgundy velvet bridal lehenga set, heavily encrusted with hand-placed Kundan stones, golden beads, and intricate gota patti patches. Features a massive 6-meter flare.',
    images: [lehenga2],
    sizes: ['S', 'M', 'L', 'CUSTOM'],
    colors: [
      { name: 'Burgundy Red', hex: '#58111A' },
      { name: 'Onyx Black', hex: '#111111' }
    ],
    rating: 4.9,
    reviewsCount: 14,
    fabric: 'Premium Italian Micro-Velvet with Double Can-can netting lining',
    work: 'Kundan stones hand-setting, Gota-patti layout and gold thread borders',
    care: 'Dry clean only. Professional steam finishing only.',
    stock: 3,
    reviews: [
      {
        id: 'rev_l2_1',
        author: 'Karina K.',
        rating: 5,
        comment: 'A heavy masterpiece! The double can-can gives it an incredible royal structure. The Kundan highlights sparkle under wedding spot lights.',
        date: '2026-05-11'
      }
    ]
  },
  {
    id: 'lehenga_03',
    name: 'Blush Floral Pastel Bridal Lehenga',
    category: 'wedding',
    subcategory: 'Bridal Lehengas',
    price: 22999,
    originalPrice: 29999,
    description: 'Designed for fairytale day weddings. Blush pink silk lehenga decorated with beautiful floral resham embroidery, silver gota wire vines, and complete with a sheer organza veil-dupatta.',
    images: [lehenga3],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Blush Pink', hex: '#FFB6C1' },
      { name: 'Mint Green', hex: '#98FF98' }
    ],
    rating: 4.8,
    reviewsCount: 17,
    fabric: 'Mulberry Slub Silk Skirt & Sheer Silk Organza Dupatta',
    work: 'Soft pastel resham embroidery and silver wire gota detailing',
    care: 'Dry clean only. Store wrapped in cotton cloth.',
    stock: 4,
    reviews: [
      {
        id: 'rev_l3_1',
        author: 'Kiara Advani',
        rating: 5,
        comment: 'So soft and dreamlike. The blush pink color is very subtle and looks amazing in daylight photographs.',
        date: '2026-05-15'
      }
    ]
  },
  {
    id: 'lehenga_04',
    name: 'Golden Zari Sovereign Lehenga',
    category: 'wedding',
    subcategory: 'Bridal Lehengas',
    price: 25999,
    originalPrice: 33999,
    description: 'Woven entirely in gold Banarasi silk brocade, this lehenga features heavy Mughal geometric arches along the hem, paired with a hand-embroidered blouse and a tissue-gold dupatta.',
    images: [lehenga4],
    sizes: ['S', 'M', 'L', 'CUSTOM'],
    colors: [
      { name: 'Imperial Gold', hex: '#D4AF37' },
      { name: 'Sand Cream', hex: '#F0E6D2' }
    ],
    rating: 4.7,
    reviewsCount: 12,
    fabric: 'Authentic Banarasi Brocade Silk & Gold Tissue Dupatta',
    work: 'Mughal Mehrab (arches) woven in gold zari and dense hand-done pearl tassels',
    care: 'Dry clean only. Keep in a dry, ventilated closet.',
    stock: 5,
    reviews: [
      {
        id: 'rev_l4_1',
        author: 'Sonam K.',
        rating: 4,
        comment: 'Heavy and classic. The tissue gold dupatta has an incredible drape and look.',
        date: '2026-05-19'
      }
    ]
  },
  {
    id: 'lehenga_05',
    name: 'Safran Gota Patti Sangeet Lehenga',
    category: 'wedding',
    subcategory: 'Bridal Lehengas',
    price: 18999,
    originalPrice: 24999,
    description: 'Vibrant saffron yellow georgette lehenga, featuring allover Gota Patti applique patches, mirror work details, and completed with a sheer net dupatta. Extremely lightweight and comfortable to dance in.',
    images: [lehenga5],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Saffron Yellow', hex: '#FFA500' },
      { name: 'Hot Pink Accent', hex: '#FF69B4' }
    ],
    rating: 4.9,
    reviewsCount: 20,
    fabric: 'Premium Georgette Skirt & Fine Net Dupatta',
    work: 'Rajasthani Gota Patti hand-work and small mirror highlights',
    care: 'Dry clean only.',
    stock: 6,
    reviews: [
      {
        id: 'rev_l5_1',
        author: 'Shraddha K.',
        rating: 5,
        comment: 'Purchased this for my sangeet. It moves beautifully during spins and dancing, and the saffron yellow is so bright and festive.',
        date: '2026-05-23'
      }
    ]
  },
  {
    id: 'lehenga_06',
    name: 'Turquoise Peacock Silk Lehenga',
    category: 'wedding',
    subcategory: 'Bridal Lehengas',
    price: 21499,
    originalPrice: 27999,
    description: 'An elegant raw silk lehenga in deep turquoise blue, featuring peacock motifs hand-embroidered with blue-green resham threads and antique gold dabka outlines.',
    images: [lehenga6],
    sizes: ['S', 'M', 'L', 'XL', 'CUSTOM'],
    colors: [
      { name: 'Turquoise Peacock', hex: '#008080' },
      { name: 'Teal Blue', hex: '#005F73' }
    ],
    rating: 4.8,
    reviewsCount: 15,
    fabric: '100% Slub Raw Silk & Satin Lining',
    work: 'Peacock motif resham threadwork and antique gold dabka wire linings',
    care: 'Dry clean only. Store on a padded hanger.',
    stock: 4,
    reviews: [
      {
        id: 'rev_l6_1',
        author: 'Alia Bhatt',
        rating: 5,
        comment: 'Beautiful contrast! The turquoise shade is unique and the peacock embroidery details are very neatly executed.',
        date: '2026-05-26'
      }
    ]
  }
];

export const COUPONS: Coupon[] = [];
