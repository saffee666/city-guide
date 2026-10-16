import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * 城市数据集合 —— schema 逆向自 ChinaTravelCo cityContent，中文化
 * 新增城市 = 在 src/content/cities/ 加一个 <slug>.json
 * status: 'live' 有完整页面；'soon' 灰态「筹备中」
 */
const cityCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/cities' }),
  schema: z.object({
    name: z.string(),
    nameEn: z.string(),
    region: z.string(), // 大区：华东 / 华南 / 华北…
    province: z.string(),
    tagline: z.string(), // 一句话定位
    intro: z.string(), // 引言段
    heroImage: z.string().optional(),
    status: z.enum(['live', 'soon']).default('live'),

    getThere: z.object({
      short: z.string(),
      more: z.string(),
    }),

    dontMiss: z.array(z.string()).length(4),

    attractions: z
      .array(
        z.object({
          name: z.string(),
          en: z.string().optional(),
          blurb: z.string(),
          tip: z.string(), // 每个景点配一条内行 Tip
        })
      )
      .min(4)
      .max(6),

    itinerary: z
      .array(
        z.object({
          day: z.string(),
          theme: z.string(),
          path: z.string(),
          slots: z
            .array(z.object({ when: z.string(), what: z.string() }))
            .length(3),
        })
      )
      .length(3),

    food: z
      .array(
        z.object({
          zh: z.string(), // 单字方块
          name: z.string(),
          tag: z.string(), // 必吃 / 街头 / 老字号…
          blurb: z.string(),
        })
      )
      .length(5),

    stay: z
      .array(
        z.object({
          level: z.string(), // 市中心 / 老城氛围 / 性价比
          name: z.string(),
          blurb: z.string(),
        })
      )
      .length(3),

    pitfalls: z
      .array(
        z.object({
          emoji: z.string(),
          title: z.string(),
          text: z.string(),
        })
      )
      .length(4),

    seasonal: z.boolean().default(false),
    bestTime: z.object({
      lead: z.string(),
      seasons: z
        .array(
          z.object({
            name: z.string(),
            note: z.string(),
            best: z.boolean(),
          })
        )
        .length(4),
    }),

    specialties: z
      .array(
        z.object({
          zh: z.string(),
          name: z.string(),
          blurb: z.string(),
        })
      )
      .length(4),

    exploreMore: z.array(z.string()).length(4),
  }),
});

export const collections = {
  city: cityCollection,
};
