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



/**
 * 景点深度页集合 —— 结构逆向自 ChinaTravelCo places/*（7 区编辑式长文）
 */
const placeCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/places' }),
  schema: z.object({
    name: z.string(),
    nameEn: z.string(),
    city: z.string(), // 所属城市 slug
    cityZh: z.string(),
    region: z.string(),
    badges: z.array(z.string()).max(4),
    oneline: z.string(),
    overview: z.string(), // 高密度叙事段，可含 <b>
    why: z.array(z.object({ b: z.string(), p: z.string() })).length(5),
    sights: z
      .array(
        z.object({
          name: z.string(),
          desc: z.string(),
          tip: z.string(), // 眼睛提示：现场怎么看
        })
      )
      .min(4)
      .max(9),
    routes: z.array(z.object({ plan: z.string(), detail: z.string() })).length(3),
    practical: z.array(z.object({ label: z.string(), value: z.string() })).min(5).max(7),
    culture: z.array(z.string()).length(2),
    nearby: z.array(z.object({ name: z.string(), desc: z.string() })).length(5),
  }),
});

/**
 * 路线页集合 —— 结构逆向自 ChinaTravelCo routes/*（classic-7-days 等 4 条）
 * kick: 'Journeys'（经典行程）| 'By Theme'（主题路线）
 * legs[].href 缺省 → 渲染 soon 灰态按钮（源站同款）
 */
const routeCollection = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/routes' }),
  schema: z.object({
    kick: z.enum([
      'Journeys', 'By Theme', 'When to Go', 'Ride the Rails', 'Follow the Dynasties',
      'Nature & Landscapes', 'Food', 'Wellness', 'Culture & Heritage', 'Towns & Cities', 'Festivals & Seasons',
    ]),
    title: z.string(),
    titleEn: z.string().optional(),
    lead: z.string(),
    legs: z
      .array(
        z.object({
          title: z.string(),
          label: z.string(), // h3 右侧 Space Mono 小标
          text: z.string(),
          href: z.string().nullish(), // null/缺省 = 源站 soon 灰态
        })
      )
      .min(5)
      .max(12),
    notes: z.array(z.string()).length(4),
    related: z.array(z.object({ label: z.string(), href: z.string() })).length(4),
  }),
});

export const collections = {
  city: cityCollection,
  place: placeCollection,
  route: routeCollection,
};
