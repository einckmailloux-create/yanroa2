-- 创建超级管理员的 SQL 脚本
--
-- 使用步骤：
-- 1. 首先在 Supabase Dashboard -> Authentication -> Users 中创建用户
-- 2. 复制创建的用户 ID
-- 3. 在下面替换 USER_ID 和 EMAIL
-- 4. 在 Supabase SQL Editor 中运行此脚本

-- ============================================
-- 配置区域 - 请修改以下值
-- ============================================

-- 替换为实际的用户 ID (从 auth.users 获取)
-- 例如: '550e8400-e29b-41d4-a716-446655440000'
\set USER_ID '替换为用户ID'

-- 替换为管理员邮箱
\set EMAIL 'admin@example.com'

-- ============================================
-- 创建超级管理员
-- ============================================

INSERT INTO admins (id, email, role, is_active)
VALUES (
  :'USER_ID'::uuid,
  :'EMAIL',
  'super_admin',
  true
)
ON CONFLICT (id)
DO UPDATE SET
  role = 'super_admin',
  is_active = true;

-- ============================================
-- 验证创建结果
-- ============================================

SELECT
  id,
  email,
  role,
  is_active,
  created_at
FROM admins
WHERE id = :'USER_ID'::uuid;
